// implicit return example
const multiply = (a=1, b=1) => a * b;

//using default values
console.log(multiply()); // 2
// without default values
console.log(multiply(2, 3)); // 6

// explicit return example
const multiplyExp = (a=1, b=1) => {
    return a * b;
};

//using default values
console.log(multiplyExp()); // 2

// without default values
console.log(multiplyExp(2, 3)); // 6