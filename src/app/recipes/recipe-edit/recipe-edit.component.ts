import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
editMode:boolean=false;
id!:number
recipeForm!:FormGroup

  constructor(private route:ActivatedRoute, private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param:Params)=>{
        this.id= + param['id']
        this.editMode=param['id'] !=null
        console.log(this.editMode);
        this.formInit()
        
      }
    )
  }

  formInit(){

    let recipeName='';
    let recipeImgPath=''
    let description=''
    let recipeIngredient= new FormArray([])
    if(this.editMode){
      const recipe=this.recipeService.getRecip(this.id)
      recipeName=recipe.recipename
      recipeImgPath=recipe.imagePath
      description= recipe.description

      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngredient.push(
            new FormGroup({
              'name':new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount,[
                Validators.pattern(/^[1-9]+[0-9]*$/),
                Validators.required
              ])
            })
          )
        }
      }
    }
    this.recipeForm= new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagepath': new FormControl(recipeImgPath,Validators.required),
      'description':new FormControl(description,Validators.required),
      'ingredients': recipeIngredient

    })
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onSubmit(){
    console.log(this.recipeForm)
  }
  addIngredient(){
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

}
