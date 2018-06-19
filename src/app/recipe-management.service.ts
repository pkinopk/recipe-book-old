import * as $ from 'jquery';
import { Recipe } from './recipe/recipe.model';
import { Ingredient } from './ingredient/ingredient.model';
import { Fridge } from './fridge/fridge.model';

export class RecipeManagementService {
  newFridgeIngredientName;
  newFridgeIngredientQuantity;
  checkIngredients = false;
  shoppingList: Ingredient[][];
  ingredientsCount: Array<Ingredient> = [new Ingredient('', 0)];
  formBinding: Recipe = new Recipe('', [new Ingredient('', 0)], [''], 0);
  selectedItem: Recipe = null;
  showEditComponent = false;
  fridge = new Fridge([
    new Ingredient('large onion', 1),
    new Ingredient('large carrots', 2),
    new Ingredient('potatos', 5),
    new Ingredient('cups of water', 2),
    new Ingredient('tablespoon of oil', 1),
  ]);
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

  // END OF VARIABLE DECLARATION

  select(recipe) {
    this.selectedItem = recipe;
    this.discard();
  }

  delete(recipe) {
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
    this.selectedItem = null;
    this.discard();
    this.checkIngredients = false;
  }

  saveRecipe() {
    console.log(this.createIngredients());
    if (this.formBinding.name !== '' && this.formBinding.instructions.toString() !== '' && this.createIngredients().length !== 0) {
      this.recipes.push(
        new Recipe(
          this.formBinding.name,
          this.createIngredients(),
          new Array(this.formBinding.instructions.toString()),
          this.formBinding.estimatedTime
        )
      );
      this.discard();
      this.showEditComponent = false;
      this.selectedItem = null;
    }
  }

  discard() {
    this.formBinding = new Recipe('', [new Ingredient('', 0)], [''], 0);
    this.ingredientsCount = [new Ingredient('', 0)];
    this.showEditComponent = false;
    this.checkIngredients = false;
  }

  edit(recipe) {
    this.formBinding.name = this.selectedItem.name;
    this.formBinding.instructions = this.selectedItem.instructions;
    this.formBinding.estimatedTime = this.selectedItem.estimatedTime;
    this.ingredientsCount = [];
    this.showEditComponent = true;

    for (let i = 0; i < this.selectedItem.ingredients.length; i++) {
      this.ingredientsCount.push(new Ingredient(this.selectedItem.ingredients[i].name, this.selectedItem.ingredients[i].quantity));
    }
    this.selectedItem = null;
  }

  createIngredients() {
    const ingredients: Array<Ingredient> = [];
    const x = Array.from($('.ingredients'));

    for (let i = 0; i < this.ingredientsCount.length; i++) {
      const item = x[i].children[1] as HTMLInputElement;
      const quantity = x[i].children[0] as HTMLInputElement;
      if (item.value !== '' && quantity.valueAsNumber > 0) {
        ingredients.push(new Ingredient(item.value, quantity.valueAsNumber));
      }
    }
    return ingredients;
  }

  addNewIngredientField() {
    this.ingredientsCount.push(new Ingredient('', 0));
  }

  addIngredientToFridge() {
    this.fridge.add(new Ingredient(this.newFridgeIngredientName, this.newFridgeIngredientQuantity));
    this.newFridgeIngredientName = null;
    this.newFridgeIngredientQuantity = null;
  }

  checkRecipe() {
    this.shoppingList = this.fridge.checkRecipe(this.selectedItem);
    this.checkIngredients = true;
  }
}
