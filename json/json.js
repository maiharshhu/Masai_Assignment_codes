let ar = [15, 30, 45, 60, 75, 90]

function extractAndReverse(arr) {
    let subArray = arr.slice(2, 4);
    let revArr = subArray.reverse();
    return revArr;
}
console.log(extractAndReverse(ar)) 