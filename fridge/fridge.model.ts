import { Recipe } from './../recipe/recipe.model';
import { Ingredient } from './../ingredient/ingredient.model';

export class Fridge {
  constructor(public contents: Ingredient[]) {}

  add(ingredient: Ingredient) {
    let found = false;
    if (ingredient.quantity > 0) {
      this.contents.forEach(element => {
        if (element.name === ingredient.name) {
          element.quantity += ingredient.quantity;
          found = true;
        }
      });
      if (!found) {
        this.contents.push(ingredient);
      }
    }
  }

  remove(ingredient: Ingredient) {
    // tslint:disable-next-line:no-shadowed-variable
    const x = this.contents.find(x => x.name === ingredient.name);
    if (x != null) {
      if (x.quantity > ingredient.quantity) {
        x.quantity -= ingredient.quantity;
      } else {
        const index = this.contents.indexOf(x);
        this.contents.splice(index, 1);
      }
    }
  }

  checkRecipe(recipe: Recipe) {
    const shoppingList: Ingredient[] = [];
    // const inFridge = this.contents;
    const ingredients = recipe.ingredients;

    ingredients.forEach(ingredient => {
      // tslint:disable-next-line:no-shadowed-variable
      const x = this.contents.find(x => x.name === ingredient.name);
      if (x === undefined) {
        // DON'T HAVE THE INGREDIENT
        const item = new Ingredient(ingredient.name, ingredient.quantity);
        shoppingList.push(item);
      } else {
        if (ingredient.quantity <= x.quantity) {
          // HAVE THE QUANTITY REQUIRED FOR THE RECIPE
          const item = new Ingredient(ingredient.name, ingredient.quantity);
          // inFridge.push(item);
        } else {
          // HAVE INGREDIENT, BUT NOT THE QUANTITY REQUIRED
          const item = new Ingredient(ingredient.name, ingredient.quantity - x.quantity);
          shoppingList.push(item);
        }
      }
    });
    // return new Array(shoppingList, inFridge);
    return new Array(shoppingList);
  }
}
