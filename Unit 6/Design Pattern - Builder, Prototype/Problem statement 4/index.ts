// index.ts
import { Book } from "./Book";

function main() {
  const original = new Book("Design Patterns", "GoF", ["Great read!"]);
  const clone = original.clone();

  // Modify the original's reviews
  original.reviews.push("Changed my life.");

  console.log("--- After Modification ---");
  console.log("Original: ");
  original.display();

  console.log("Clone:    ");
  clone.display(); // Will NOT show "Changed my life."
}

main();
