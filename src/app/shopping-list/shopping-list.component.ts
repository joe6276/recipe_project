import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../Services/shopping.service';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[]=[]

OnIngedientadd(ingredient:Ingredients){
  this.ingredients.push(ingredient)
}
  constructor(private shoppingServie:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients= this.shoppingServie.getIngredients()
    this.shoppingServie.ingredientsChanged.subscribe((ingrediet:Ingredients[])=>{
      this.ingredients=ingrediet
    })
  }

}
