// index.ts
import { AppleFactory, SamsungFactory } from "./DeviceFactory";

function main() {
  // 1. Create an Apple Laptop
  const appleFactory = new AppleFactory();
  const myMacBook = appleFactory.createDevice("Laptop");

  // 2. Create a Samsung Phone
  const samsungFactory = new SamsungFactory();
  const myGalaxy = samsungFactory.createDevice("Phone");

  // Printing specifications
  console.log("--- Manufacturing Report ---");
  myMacBook?.specifications();
  myGalaxy?.specifications();
}

main();
