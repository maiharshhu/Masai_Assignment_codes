export class Pizza {
    public size: string = "";
    public cheese: boolean = false;
    public pepperoni: boolean = false;
    public mushrooms: boolean = false;

    displayDetails(): void {
        console.log(`Pizza Order:
        - Size: ${this.size}
        - Cheese: ${this.cheese ? "Yes" : "No"}
        - Pepperoni: ${this.pepperoni ? "Yes" : "No"}
        - Mushrooms: ${this.mushrooms ? "Yes" : "No"}`);
    }
}