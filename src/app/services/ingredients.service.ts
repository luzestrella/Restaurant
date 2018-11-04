import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ingridientsService {
    ingredientsChanged= new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('tomates', 5),
        new Ingredient('manzana', 3),
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    addIngredients(auxIngredients: Ingredient[]){
      for (const i of auxIngredients) {
       this.ingredients.push(i)
       
      }  
      this.ingredientsChanged.emit(this.ingredients.slice());
    }

}