import { Component, OnInit,Output,EventEmitter,ElementRef,ViewChild } from '@angular/core';

import  {Ingredient} from '../../shared/ingredient.model'; 
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameIngredient') nameInputRef:ElementRef;
	@ViewChild('amountIngredient') amountInputRef:ElementRef;
	@Output() ingredientData = new EventEmitter <Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
  	const ingName=this.nameInputRef.nativeElement.value;
  	const ingAmount=this.amountInputRef.nativeElement.value;
  	
  	const newIngredient = new Ingredient(ingName,ingAmount);
  	this.ingredientData.emit(newIngredient);

  }

}
