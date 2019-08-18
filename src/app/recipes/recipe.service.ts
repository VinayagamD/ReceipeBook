import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private  slService: ShoppingListService) {

  }
  private recipes: Recipe[] =
    [
      new Recipe('Tasty Schnitzel', 'A super-tasty schnitzel - just awesome',
        'https://toriavey.com/images/2011/02/IMG_1544.jpg',
        [
            new Ingredient('Meat', 1 ),
            new Ingredient('French Fries', 20)
        ]),
      new Recipe('Big Fat Burger', 'What else need to say',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFq40MZI6xs7RHopv_zDW4KnW5K9uL1MI8AMg3mbypsVQOfmDbA',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
    ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
