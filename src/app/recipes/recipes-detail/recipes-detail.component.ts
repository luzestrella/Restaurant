import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../Recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
//@Input() recipe: Recipes;
recipe: Recipes;
id: number;
  constructor(private recipeService: RecipeService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.route.params.subscribe((param: Params)=>{
    this.id= +param['id'];
    this.recipe=this.recipeService.getRecipe(this.id);
  });
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    
  }
 onEditRecipe(){
   this.router.navigate(['edit'], {relativeTo: this.route})
 }
}
