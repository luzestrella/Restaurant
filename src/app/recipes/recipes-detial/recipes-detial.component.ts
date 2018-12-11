import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router,Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipes-detial',
  templateUrl: './recipes-detial.component.html',
  styleUrls: ['./recipes-detial.component.css']
})
export class RecipesDetialComponent implements OnInit {
// @Input() recipe:Recipe;
recipe:Recipe;
  id: number;
  constructor(private recipeService: RecipeService,private router:Router, private route: ActivatedRoute) { }
 
  ngOnInit() {
      this.route.params.subscribe((param: Params)=>{
        this.id=param["id"];
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});

  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onDeleteRecipe(){
  
  }
}
