import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingService{
    ingredientsChanged= new EventEmitter<Ingredients[]>()
    private ingredients:Ingredients[]=[
        new Ingredients('tomato',5),
        new Ingredients('onion',3)
      ];
getIngredients(){
    return this.ingredients.slice() 
}

addIngredients(ingredient:Ingredients){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
} 

addIngredient(ingredient:Ingredients[]){
    this.ingredients.push(...ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
}
      
}