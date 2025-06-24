const numbers = [1, 2, 3, 4, 5, 6];
// const result = getEvenSquares(numbers);
// console.log(result); // [4, 16, 36]

function getEvenSquares(num){
    let filtered = num
    .filter(ele=>ele%2==0)
    .map(ev=>ev*ev)
    console.log(filtered)
}

getEvenSquares(numbers)