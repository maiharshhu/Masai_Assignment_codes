// The Decorator class
class Sugar extends Beverage {
    // It takes any Beverage (GreenTea, or even another Decorator) in the constructor
    constructor(private beverage: Beverage) {
        super();
    }

    getDescription(): string {
        // Appends " + Sugar" to whatever the inner beverage description is
        return `${this.beverage.getDescription()} + Sugar`;
    }

    getCost(): number {
        // Adds 10 to whatever the inner beverage cost is
        return this.beverage.getCost() + 10;
    }
}

// Testing the implementation
const tea = new Sugar(new GreenTea());

console.log(tea.getDescription()); // Output: Green Tea + Sugar
console.log(tea.getCost());        // Output: 50