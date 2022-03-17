import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@ Input() recipe?:{recipename:string, description:string , imagePath:string}
@Output() recipeSelected= new EventEmitter<void>()
  constructor() { }

  showRecipe(){
    this.recipeSelected.emit()

  }
  ngOnInit(): void {
  }

}
