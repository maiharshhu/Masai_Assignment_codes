class Engine {
    start(): void {
        console.log("Engine started");
    }
}

class Car {
    // Tight Coupling: The Car class is directly dependent on the Engine class
    private engine: Engine;

    constructor() {
        this.engine = new Engine();
    }

    drive(): void {
        this.engine.start();
        console.log("Car is driving");
    }
}

// Execution
const myCar = new Car();
myCar.drive();