class Bird {
    fly() {
        console.log("I can fly");
    }
}

class Penguin extends Bird {
    // Overriding the parent method
    fly() {
        console.log("I cannot fly");
    }
}

// Execution
const genericBird = new Bird();
const myPenguin = new Penguin();

genericBird.fly(); // Output: I can fly
myPenguin.fly();   // Output: I cannot fly


