// CarBuilder.ts
import { Car } from "./Car";

export class CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    setBrand(brand: string): CarBuilder {
        this.car.brand = brand;
        return this;
    }

    setEngine(engine: string): CarBuilder {
        this.car.engine = engine;
        return this;
    }

    setColor(color: string): CarBuilder {
        this.car.color = color;
        return this;
    }

    addSunroof(): CarBuilder {
        this.car.sunroof = true;
        return this;
    }

    setAutomaticTransmission(): CarBuilder {
        this.car.automaticTransmission = true;
        return this;
    }

    build(): Car {
        return this.car;
    }
}