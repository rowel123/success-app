import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe("Test Recipe","Awesome",
    "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",20),
    new Recipe("Chicken","Awesome",
    "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",10)
  ];
 @Output() recipeWasSelected = new EventEmitter <Recipe>();
  constructor() { }

  ngOnInit() {
  }
  recipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
  }

}
