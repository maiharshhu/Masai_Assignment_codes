let P = parseFloat(prompt("Enter Principal"));
let R = parseFloat(prompt("Enter Rate"));
let T = parseFloat(prompt("Enter Time"));
if (isNaN(P) || isNaN(R) || isNaN(T)) {
    console.log('Invalid input, all values must be non-negative');
}
else {
    let si = ((P * R * T) / 100);
    console.log(`The simple interest is ${si}`);
}