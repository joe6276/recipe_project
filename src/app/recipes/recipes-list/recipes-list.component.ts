import { Component, OnInit, EventEmitter ,Output } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[]

@Output() showRecipe= new EventEmitter<Recipe>()
  constructor(private recipeService:RecipeService
    ,private router:Router,
    private route:ActivatedRoute
    ) { }
  onrecipeSelected(recipe:Recipe){
    this.showRecipe.emit(recipe)
  }
  ngOnInit(): void {
    this.recipes= this.recipeService.getRecipe()
  }
  onNewRecipe(){

    this.router.navigate(['new'], {relativeTo:this.route})

  }
}
