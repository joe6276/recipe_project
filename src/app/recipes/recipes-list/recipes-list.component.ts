import { Component, OnInit, EventEmitter ,Output, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/Services/recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy {
recipes:Recipe[]=[]
sub!:Subscription
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
    this.sub=this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes
      }
    )
  }
  onNewRecipe(){

    this.router.navigate(['new'], {relativeTo:this.route})

  }
  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }
}
