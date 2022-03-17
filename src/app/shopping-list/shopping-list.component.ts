import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[]=[
  new Ingredients('tomato',5),
  new Ingredients('onion',3)
];
  constructor() { }

  ngOnInit(): void {
  }

}
