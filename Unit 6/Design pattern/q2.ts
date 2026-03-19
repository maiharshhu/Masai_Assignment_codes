// 1. Define the Prototype interface
interface Prototype {
    clone(): GameCharacter;
}

// 2. Implement the GameCharacter class
class GameCharacter implements Prototype {
    constructor(
        public name: string,
        public level: number,
        public weapon: string
    ) {}

    // The clone method creates a new instance with the same property values
    clone(): GameCharacter {
        // We create a new instance using the current object's properties
        return new GameCharacter(this.name, this.level, this.weapon);
    }

    display(): void {
        console.log(`Character -> Name: ${this.name}, Level: ${this.level}, Weapon: ${this.weapon}`);
    }
}

// 3. Main function to demonstrate usage
function main() {
    // 1. Creating the original "Warrior" character
    const originalWarrior = new GameCharacter("Warrior", 10, "sword");
    console.log("--- Original Character ---");
    originalWarrior.display();

    // 2. Cloning the character to create "Warrior Clone"
    const warriorClone = originalWarrior.clone();
    warriorClone.name = "Warrior Clone"; // Modifying the clone's name

    console.log("\n--- After Cloning and Modifying ---");
    originalWarrior.display(); // Stays "Warrior"
    warriorClone.display();    // Is "Warrior Clone"

    // Verification that they are separate instances
    console.log("\nAre they the same instance in memory?", originalWarrior === warriorClone ? "Yes" : "No");
}

main();