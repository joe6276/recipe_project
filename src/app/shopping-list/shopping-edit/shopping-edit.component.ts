import { Component, ElementRef, OnInit,Output,EventEmitter, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/Services/shopping.service';
import { Ingredients } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef?:ElementRef;
  @ViewChild('amountInput') amountInputRef?:ElementRef;
 
  constructor(private shoppingService:ShoppingService) { }

  addItem(){
    const igName=this.nameInputRef?.nativeElement.value;
    const igAmount= this.amountInputRef?.nativeElement.value;
    const newIgredient= new Ingredients(igName,igAmount)
    this.shoppingService.addIngredients(newIgredient)
  }
  
  ngOnInit(): void {
  }

}
