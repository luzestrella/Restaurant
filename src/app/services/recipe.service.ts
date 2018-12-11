import { Recipe } from "../recipes/recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { IngredientsService } from "./Ingredients.service";
import { Subject } from "rxjs";

@Injectable()
export class
  RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();

  RecipeEmit = new Subject<Recipe[]>();
  RecipeEditing = new Subject<number>();
  private recipes: Recipe[] = [
    new Recipe('Pastel',
      'pastel de fresa',
      'https://cdn2.cocinadelirante.com/sites/default/files/images/2017/06/pastelnapolitano.jpg',
      [new Ingredient('fresa', 2),
      new Ingredient('nuez', 4)]),

    new Recipe('Pastel1', 'pastel grande',
      'https://cdn2.cocinadelirante.com/sites/default/files/images/2017/06/pastelnapolitano.jpg',
      [new Ingredient('zarzamora', 2), new Ingredient('durazno', 4), new Ingredient('nuez', 5)])
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  constructor(private ingredientsService: IngredientsService) {

  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredientsService.addIngredients(ingredients);
  }
  DeleteRecipe(){
    
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.RecipeEmit.next(this.recipes.slice());
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.RecipeEmit.next(this.recipes.slice());
  }

}