import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../Services/shopping.service';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredients[]=[]
  private sub! :Subscription

OnIngedientadd(ingredient:Ingredients){
  this.ingredients.push(ingredient)
}
  constructor(private shoppingServie:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients= this.shoppingServie.getIngredients()
      this.sub=    this.shoppingServie.ingredientsChanged.subscribe((ingrediet:Ingredients[])=>{
        this.ingredients=ingrediet
      })
  }
  onEditItem(index:number){
    this.shoppingServie.IdChanged.next(index)
  }
  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }

}
