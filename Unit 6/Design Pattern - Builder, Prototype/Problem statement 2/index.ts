// index.ts
import { GameCharacter } from "./GameCharacter";

function main() {
    // 1. Create the original character
    const originalWarrior = new GameCharacter("Warrior", 10, "Sword");
    console.log("--- Original Character ---");
    originalWarrior.displayDetails();

    // 2. Clone the character
    const clonedWarrior = originalWarrior.clone();
    
    // Modify the clone's property to prove it's a separate instance
    clonedWarrior.name = "Warrior Clone";
    
    console.log("\n--- After Cloning and Modifying Name ---");
    originalWarrior.displayDetails();
    clonedWarrior.displayDetails();

    // Verification check
    console.log("\nAre they separate instances?", originalWarrior !== clonedWarrior);
}

main();