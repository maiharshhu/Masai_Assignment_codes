// PizzaBuilder.ts
import { Pizza } from "./Pizza";

export class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  setSize(size: "small" | "medium" | "large"): PizzaBuilder {
    this.pizza.size = size;
    return this;
  }

  addCheese(): PizzaBuilder {
    this.pizza.cheese = true;
    return this;
  }

  addPepperoni(): PizzaBuilder {
    this.pizza.pepperoni = true;
    return this;
  }

  addMushrooms(): PizzaBuilder {
    this.pizza.mushrooms = true;
    return this;
  }

  build(): Pizza {
    return this.pizza;
  }
}
