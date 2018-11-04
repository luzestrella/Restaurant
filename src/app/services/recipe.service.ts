import { Recipes } from "../recipes/Recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ingridientsService } from "./ingredients.service";
import { TouchSequence } from "selenium-webdriver";


@Injectable()//
export class RecipeService {

    //recipeSelected = new EventEmitter<Recipes>();

    private recipes: Recipes[] = [
        new Recipes('Pastel', 'This is a simply test', 'https://cdn2.cocinadelirante.com/sites/default/files/images/2017/06/pastelnapolitano.jpg',
            [ 
            new Ingredient('fresa',2),
            new Ingredient('cereza',2)
            ]
        ),
        new Recipes('Pastel 1', 'This is a simply test', 'https://cdn2.cocinadelirante.com/sites/default/files/images/2017/06/pastelnapolitano.jpg', [ 
            new Ingredient('durazno',2),
            new Ingredient('apple',2)
            ]),
        
        new Recipes('Pastel 2', 'This is a simply test', 'https://cdn2.cocinadelirante.com/sites/default/files/images/2017/06/pastelnapolitano.jpg', [ 
            new Ingredient('orange',2),
            new Ingredient('fresa',2)
            ])
    ];
    constructor(private ingredientsService: ingridientsService){

    }
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
    }
    getRecipe(index : number){
        return this.recipes[index];
    }
}