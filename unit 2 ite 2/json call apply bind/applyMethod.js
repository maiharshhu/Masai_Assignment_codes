function multiplyNumbers(a,b){
    return a*b;
}

const myObj = {
    res:0
};

let numbers = [2,3]
let res = multiplyNumbers.apply(myObj,numbers);
console.log(res)


// let numbers = [2,3]
// let res = multiplyNumbers.apply(null,numbers);
// console.log(res)