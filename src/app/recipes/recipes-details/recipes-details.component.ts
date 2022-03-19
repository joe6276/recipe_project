import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
@Input() recipe!:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onaddToShopping(){
    this.recipeService.addIngredienttoSlist(this.recipe.ingredients)
  }
}
