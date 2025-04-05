let Weight = parseFloat(prompt("Enter Weight"));
let Height = parseFloat(prompt("Enter Height"));


if (Height == 0) {
    console.log("Invalid input, height cannot be zero")
}
else {
    if (isNaN(Weight) || isNaN(Height)) {
        console.log('Invalid input, height and weight must be positive numbers');
    }
    else {
        let BMI = (Weight / (Height * Height));
        console.log(`Your BMI is ${BMI.toFixed(2)}`);
    }
}