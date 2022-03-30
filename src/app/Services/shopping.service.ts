
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";


export class ShoppingService{
    ingredientsChanged= new Subject<Ingredients[]>()

    IdChanged= new Subject<number>()

    private ingredients:Ingredients[]=[
        new Ingredients('tomato',5),
        new Ingredients('onion',3)
      ];
getIngredients(){
    return this.ingredients.slice() 
}
getIngredient(index:number){
    return this.ingredients[index]
}
deleteItem(index:number){
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice())
}
updateIngredient(id:number, newIngredient:Ingredients){
    this.ingredients[id]= newIngredient
    this.ingredientsChanged.next(this.ingredients.slice())
}

addIngredients(ingredient:Ingredients){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
} 

addIngredient(ingredient:Ingredients[]){
    this.ingredients.push(...ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
}
      
}