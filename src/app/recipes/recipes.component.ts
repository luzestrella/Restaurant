import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
   
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;

  constructor() {
   }

  ngOnInit() {

  }

}
