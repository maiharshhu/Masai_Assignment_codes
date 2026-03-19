// 1. The Product Class
class Pizza {
  public size: string = "";
  public cheese: boolean = false;
  public pepperoni: boolean = false;
  public mushrooms: boolean = false;

  display(): void {
    console.log(`Pizza Details:
- Size: ${this.size}
- Cheese: ${this.cheese ? "Yes" : "No"}
- Pepperoni: ${this.pepperoni ? "Yes" : "No"}
- Mushrooms: ${this.mushrooms ? "Yes" : "No"}`);
  }
}

// 2. The Builder Class
class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  setSize(size: "small" | "medium" | "large"): PizzaBuilder {
    this.pizza.size = size;
    return this; // Return this for method chaining
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

// 3. Main Function / Usage
function main() {
  // Create a large pizza with cheese and mushrooms
  const myPizza = new PizzaBuilder()
    .setSize("large")
    .addCheese()
    .addMushrooms()
    .build();

  myPizza.display();
}

main();
