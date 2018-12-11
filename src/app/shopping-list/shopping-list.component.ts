import { Component, OnInit, EventEmitter, Output,OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { IngredientsService } from '../services/Ingredients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  constructor(private IngredientsService: IngredientsService) { }
  private subscription:Subscription;
  ngOnInit() {
    this.ingredients =this.IngredientsService.getIngredientes();
    this.subscription=this.IngredientsService.ingredientEmit.subscribe(
      (recipe:Ingredient[])=>{
        this.ingredients = recipe;
      }
   );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
     this.IngredientsService.startedEditing.next(index);
  }

}
