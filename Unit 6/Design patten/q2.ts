// 1. Define the Interface
interface IVehicle {
    start(): void;
}

// 2. Implement the Interface in Car
class Car implements IVehicle {
    start(): void {
        console.log("Car is starting");
    }
}

// 3. Implement the Interface in Bike
class Bike implements IVehicle {
    start(): void {
        console.log("Bike is starting");
    }
}

// 4. Driver class using Dependency Injection (Loose Coupling)
class Driver {
    private vehicle: IVehicle;

    // The Driver doesn't care if it's a Car or Bike, as long as it is an IVehicle
    constructor(vehicle: IVehicle) {
        this.vehicle = vehicle;
    }

    drive(): void {
        this.vehicle.start();
        console.log("Driving...");
    }
}

// --- Execution ---

const car = new Car();
const driver1 = new Driver(car);
driver1.drive();

const bike = new Bike();
const driver2 = new Driver(bike);
driver2.drive();