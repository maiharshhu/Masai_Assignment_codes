// 1. Define the Interface
interface IEngine {
    start(): void;
}

// 2. Implement the Interface in specific engine types
class PetrolEngine implements IEngine {
    start(): void {
        console.log("Petrol engine started");
    }
}

class DieselEngine implements IEngine {
    start(): void {
        console.log("Diesel engine started");
    }
}

// 3. Refactored Car class using Dependency Injection
class Car {
    private engine: IEngine;

    // The engine is passed in (injected) rather than created inside
    constructor(engine: IEngine) {
        this.engine = engine;
    }

    drive(): void {
        this.engine.start();
        console.log("Driving car");
    }
}

// --- Demonstration ---

// We can now swap engines without ever touching the Car class code
const petrolCar = new Car(new PetrolEngine());
petrolCar.drive();

const dieselCar = new Car(new DieselEngine());
dieselCar.drive();