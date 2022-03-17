import { Component, OnInit, EventEmitter ,Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('Test Recipe',"Description of test Recipe", "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/malpua-recipe.jpg"),
  new Recipe('Test Recipe',"Description of test Recipe", "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80")
];

@Output() showRecipe= new EventEmitter<Recipe>()
  constructor() { }
  onrecipeSelected(recipe:Recipe){
    this.showRecipe.emit(recipe)
  }
  ngOnInit(): void {
  }

}
