let num1 = parseFloat(prompt("Enter num1"));
let num2 = parseFloat(prompt("Enter num2"));
if (num1 > num2) {
    console.log(`${num1} is larger than ${num2}`);
}
else if (num1 < num2) {
    console.log(`${num2} is larger than ${num1}`);
}
else {
    console.log("Both numbers are equal");
}