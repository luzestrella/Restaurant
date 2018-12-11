import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipes.model'; 
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({ 
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[];
  private sure: Subscription;
  constructor(private recipeService:RecipeService, private router:Router, private route: ActivatedRoute) {

   }
 
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
   }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.sure=this.recipeService.RecipeEmit.subscribe((event)=>{
      this.recipes= this.recipeService.getRecipes();
    })
  }
  ngOnDestroy(){
    this.sure.unsubscribe();
  }

}
