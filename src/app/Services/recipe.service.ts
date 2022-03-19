import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingService } from "./shopping.service";

@Injectable()
export class RecipeService{
    constructor(private shoppingService:ShoppingService) { }
    private recipes:Recipe[]=[
        new Recipe('Test Recipe',"Description of test Recipe",
         "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/malpua-recipe.jpg"
        ,[new Ingredients('meat',2),
         new Ingredients('salt',2)
        ],
         ),
        new Recipe('Test Recipe',"Description of test Recipe", 
        
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
        ,[new Ingredients('meat',2),
        new Ingredients('salt',2)
        ])
    ];

    getRecipe(){
        return this.recipes.slice()
    }

    addIngredienttoSlist(ingredient:Ingredients[]){
        this.shoppingService.addIngredient(ingredient)

    }
    getSelected= new EventEmitter<Recipe>()
}