// GameCharacter.ts
export class GameCharacter {
    constructor(
        public name: string,
        public level: number,
        public weapon: string
    ) {}

    // The core of the Prototype Pattern
    clone(): GameCharacter {
        // Create a new instance with the same properties
        return new GameCharacter(this.name, this.level, this.weapon);
    }

    displayDetails(): void {
        console.log(`Character: ${this.name} | Level: ${this.level} | Weapon: ${this.weapon}`);
    }
}