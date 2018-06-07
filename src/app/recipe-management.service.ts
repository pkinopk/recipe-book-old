import { Recipe } from './recipe/recipe.model';
import { Ingredient } from './ingredient/ingredient.model';

export class RecipeManagementService {
  selectedItem: Recipe = null;
  recipes: Recipe[] = [
    new Recipe(
      'Potato and Carrot Stew',
      [
        new Ingredient('large onion', 1),
        new Ingredient('large carrots', 2),
        new Ingredient('potatos', 5),
        new Ingredient('cups of water', 2),
        new Ingredient('tablespoon of oil', 1),
      ],
      [
        'Heat the oil in a large pot and add the chopped onion',
        'Cover potatoes with water',
        'Add sliced carrots',
        'Let it cook until the veggies are tender (about 20 minutes)',
        'Add sliced, peeled tomatoes',
        'Stir and cook for another 5 minutes',
        'Serve with fresh parsley on top!',
      ],
      40
    ),
    new Recipe(
      'Scrambled Eggs',
      [new Ingredient('large eggs', 4), new Ingredient('cup of milk', 1), new Ingredient('tablespoon of butter', 2)],
      [
        'Beat eggs, milk, salt and pepper in medium bowl until blended',
        'Heat butter in large nonstick skillet over medium heat until hot. Pour in egg mixture',
        'As eggs begin to set, gently pull the eggs across the pan with a spatula, forming large soft curds',
        'Continue cooking until thickened and no visible liquid egg remains',
        'Remove from heat and serve immediately',
      ],
      5
    ),
  ];

  select(recipe) {
    this.selectedItem = recipe;
  }

  delete(recipe) {
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
    this.selectedItem = null;
    // this.discart();
  }

  edit(recipe) {
    // this.formBinding.name = this.selectedItem.name;
    // this.formBinding.instructions = this.selectedItem.instructions;
    // this.formBinding.estimatedTime = this.selectedItem.estimatedTime;
    // this.ingredientsCount = [];
    // for (let i = 0; i < this.selectedItem.ingredients.length; i++) {
    //   this.ingredientsCount.push(new Ingredient(this.selectedItem.ingredients[i].name, this.selectedItem.ingredients[i].quantity));
    // }
  }
}