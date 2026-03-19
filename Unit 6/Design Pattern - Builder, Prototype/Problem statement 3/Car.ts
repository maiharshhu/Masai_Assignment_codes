// Car.ts
export class Car {
  public brand: string = "";
  public engine: string = "";
  public color: string = "";
  public sunroof: boolean = false;
  public automaticTransmission: boolean = false;

  displayDetails(): void {
    console.log(`--- Car Configuration ---`);
    console.log(`Brand:        ${this.brand}`);
    console.log(`Engine:       ${this.engine}`);
    console.log(`Color:        ${this.color}`);
    console.log(`Sunroof:      ${this.sunroof ? "Yes" : "No"}`);
    console.log(
      `Transmission: ${this.automaticTransmission ? "Automatic" : "Manual"}`,
    );
    console.log(`-------------------------\n`);
  }
}
