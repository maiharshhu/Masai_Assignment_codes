// The Interface
interface Vehicle {
  start(): void;
}

// Concrete Implementation: Bike
class Bike implements Vehicle {
  start(): void {
    console.log("Bike is starting");
  }
}

// Concrete Implementation: Car
class Car implements Vehicle {
  start(): void {
    console.log("Car is starting");
  }
}

class Driver {
  private vehicle: Vehicle;

  constructor(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }

  // This method allows the dynamic switching at runtime
  setVehicle(vehicle: Vehicle): void {
    this.vehicle = vehicle;
  }

  drive(): void {
    this.vehicle.start();
    console.log("Driving...");
  }
}

// 1. Start with a Bike
const myBike = new Bike();
const driver = new Driver(myBike);
driver.drive(); 

// 2. Switch to a Car at runtime
const myCar = new Car();
driver.setVehicle(myCar);
driver.drive();