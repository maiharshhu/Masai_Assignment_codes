let nums = [1,2,3,4,5,6,7,8,9,10]

function filterEvenNumbers(num) {
    return num % 2 === 0;
}
console.log(nums.filter(filterEvenNumbers));
