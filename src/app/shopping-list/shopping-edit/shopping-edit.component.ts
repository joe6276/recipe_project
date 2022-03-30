import { Component, ElementRef, OnInit,Output,EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/app/Services/shopping.service';
import { Ingredients } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  // @ViewChild('nameInput') nameInputRef?:ElementRef;
  // @ViewChild('amountInput') amountInputRef?:ElementRef;

  sub!:Subscription
  editMode=false
  id!:number
  ingredient!:Ingredients

  @ViewChild('f') slForm!:NgForm
 
  constructor(private shoppingService:ShoppingService) { }

  addItem( f:NgForm){
    const value= f.value
    const newIgredient= new Ingredients(value.name,value.amount)
    if(this.editMode){
      this.shoppingService.updateIngredient(this.id, newIgredient)
    }else{
      this.shoppingService.addIngredients(newIgredient)
    }
    this.editMode=false
    f.reset()
    
  }

  clearForm(){
    this.editMode=false
    this.slForm.reset()
  }
  onDelete(){
    this.shoppingService.deleteItem(this.id)
    this.clearForm()
  }
  
  ngOnInit(): void {
   this.sub= this.shoppingService.IdChanged.subscribe(
      (index:number)=>{
        this.id=index
        this.editMode=true
         this.ingredient= this.shoppingService.getIngredient(index)
         this.slForm.setValue({
           name:this.ingredient.name,
           amount:this.ingredient.amount
         })
      }
    )
  }
  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }

}
