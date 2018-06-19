export class Ingredient {
  constructor(public name: string, public quantity: number) {}

  add(name: string, n: number) {
    if (this.name === name) {
      this.quantity += n;
    }
  }

  subtract(name: string, n: number) {
    if (this.name === name) {
      if (this.quantity >= n) {
        this.quantity -= n;
      }
    }
  }
}
