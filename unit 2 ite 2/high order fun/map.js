const numbers = [1, 2, 3, 4];
// const result = doubleNumbers(numbers);
// console.log(result); // [2, 4, 6, 8]

function doubleNumbers(num){
    let double = num.map(ele=>ele*2)
    return double
}

console.log(doubleNumbers(numbers))