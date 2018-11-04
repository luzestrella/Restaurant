import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ingridientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private ingredientsService: ingridientsService) { }

  ngOnInit() {
  
  }
  
 onAddItem(){
   const  name= this.nameInputRef.nativeElement.value;
   const  amount= this.amountInputRef.nativeElement.value;
   const newIngredient= new Ingredient(name,amount);
   this.ingredientsService.addIngredient(newIngredient);
 }
}
