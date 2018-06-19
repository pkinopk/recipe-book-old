import { Ingredient } from './../ingredient/ingredient.model';

export class Recipe {
  constructor(public name: string, public ingredients: Ingredient[], public instructions: string[], public estimatedTime: number) {}

  addItem(item: Ingredient) {
    this.ingredients.push(item);
  }

  addInstruction(instruction: string) {
    this.instructions.push(instruction);
  }
}
