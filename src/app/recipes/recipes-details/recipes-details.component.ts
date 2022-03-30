import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
recipe!:Recipe
id:number=12;
  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
this.route.params.subscribe(
  (params:Params)=>{
    this.id= + params['id']
    this.recipe= this.recipeService.getRecip(this.id)
  }
  
)

//this.recipe= this.recipeService.getRecip(this.id)

  }
  onaddToShopping(){
    this.recipeService.addIngredienttoSlist(this.recipe.ingredients)
  }

  onEditrecipe(){
   // this.router.navigate(['edit'],{relativeTo:this.route})
    this.router.navigate(['../', this.id, 'edit'],{relativeTo:this.route})
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
}
