// 1. Define the abstract base class
abstract class Beverage {
    // Abstract methods have no implementation here; 
    // subclasses MUST provide the logic.
    abstract getDescription(): string;
    abstract getCost(): number;
}

// 2. Implement the concrete class GreenTea
class GreenTea extends Beverage {
    getDescription(): string {
        return "Green Tea";
    }

    getCost(): number {
        return 40;
    }
}

// Execution
const tea = new GreenTea();

console.log(tea.getDescription()); // Output: Green Tea
console.log(tea.getCost());        // Output: 40