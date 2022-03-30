import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingService } from "./shopping.service";

@Injectable()
export class RecipeService{

    recipeChanged=new Subject<Recipe[]>()
    constructor(private shoppingService:ShoppingService) { }
    private recipes:Recipe[]=[
        new Recipe('Burgersas',"Description of test Recipe",
         "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/malpua-recipe.jpg"
        ,[new Ingredients('meat',2),
         new Ingredients('salt',2)
        ],
         ),
        new Recipe('Test Recipe',"Description of test Recipe", 
        
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
        ,[new Ingredients('Avocado',2),
        new Ingredients('salt',2)
        ])
    ];
        getRecip(id:number){
            return this.recipes[id]
        }

    getRecipe(){
        return this.recipes.slice()
    }

    addIngredienttoSlist(ingredient:Ingredients[]){
        this.shoppingService.addIngredient(ingredient)

    }
    getSelected= new Subject<Recipe>()

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe)
        this.recipeChanged.next(this.recipes.slice())
    }
    updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index]= newRecipe
        this.recipeChanged.next(this.recipes.slice())
    }
    deleteRecipe(index:number){
    this.recipes.splice(index, 1)
    this.recipeChanged.next(this.recipes.slice())
    }
}