import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@ Input() recipe!:Recipe

  constructor(private recipeService:RecipeService) { }

  showRecipe(){
   this.recipeService.getSelected.emit(this.recipe)
  }
  ngOnInit(): void {
  }

}
