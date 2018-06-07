import { Recipe } from './../recipe/recipe.model';
import { Ingredient } from './../ingredient/ingredient.model';

export class Fridge {
  constructor(public contents: Ingredient[]) {}

  add(item: Ingredient) {
    this.contents.forEach(element => {
      if (element.name === item.name) {
        element.quantity += item.quantity;
      }
    });
    this.contents.push(item);
  }

  remove(item: Ingredient) {
    // tslint:disable-next-line:no-shadowed-variable
    const x = this.contents.find(x => x === item);
    if (x != null) {
      if (x.quantity >= item.quantity) {
        x.quantity -= item.quantity;
      } else {
        const index = this.contents.indexOf(x);
        this.contents.splice(index, 1);
      }
    }
  }

  checkRecipe(recipe: Recipe) {
    const shoppingList: Ingredient[] = [];
    const inFridge = this.contents;
    const ingredients = recipe.ingredients;

    ingredients.forEach(ingredient => {
      const index = this.contents.indexOf(ingredient);
      if (index < 0) {
        // DON'T HAVE THE INGREDIENT
        const item = new Ingredient(ingredient.name, ingredient.quantity);
        shoppingList.push(item);
      } else {
        if (ingredient.quantity <= this.contents[index].quantity) {
          // HAVE THE QUANTITY REQUIRED FOR THE RECIPE
          const item = new Ingredient(ingredient.name, ingredient.quantity);
          inFridge.push(item);
        } else {
          // HAVE INGREDIENT, BUT NOT THE QUANTITY REQUIRED
          const item = new Ingredient(ingredient.name, ingredient.quantity - this.contents[index].quantity);
          shoppingList.push(item);
        }
      }
    });
    return new Array(shoppingList, inFridge);
  }
}
