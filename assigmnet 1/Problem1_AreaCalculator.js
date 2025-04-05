let Base = prompt("Enter triangle base:");
let Height = prompt("Enter triangle Height:");
if (Base < 0 || Height < 0) {
    console.log("Invalid number, base and height must be positive numbers")
}
else {
    let Area = ((Base * Height) / 2)
    console.log(`The aera of the triangle is:${Area}`);
}