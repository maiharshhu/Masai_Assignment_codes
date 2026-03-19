// index.ts
import { CarBuilder } from "./CarBuilder";

function main() {
  // 1. Creating a Tesla Model S with specific attributes
  const teslaBuilder = new CarBuilder();

  const myTesla = teslaBuilder
    .setBrand("Tesla Model S")
    .setEngine("Electric")
    .setColor("Black")
    .addSunroof()
    .setAutomaticTransmission()
    .build();

  // 2. Printing the car details
  myTesla.displayDetails();
}

main();
