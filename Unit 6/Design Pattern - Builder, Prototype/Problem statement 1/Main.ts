import { PizzaBuilder } from "./PizzaBuilder";

function main() {
    // Constructing the pizza using the Builder Pattern
    const customerOrder = new PizzaBuilder()
        .setSize("large")
        .addCheese()
        .addMushrooms()
        .build();

    customerOrder.displayDetails();
}

main();