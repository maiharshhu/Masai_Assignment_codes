// 1. The Contract (Interface)
interface IDuck {
    swim(): void;
    fly(): void;
    sound(): void;
}

// 2. Implementing the interface
class ToyDuck implements IDuck {
    fly() {
        console.log("Cannot fly");
    }
    
    sound() {
        console.log("Cannot sound");
    }

    swim() {
        console.log("Can float on water");
    }
}

// 3. Execution
const myToy = new ToyDuck();
myToy.fly();
myToy.sound();
myToy.swim();