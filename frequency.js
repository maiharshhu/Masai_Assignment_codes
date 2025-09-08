// const str = "harrrssh"
// let obj = {};
// let len = str.length
// console.log(len)
// for (let i = 0; i < len; i++) {
//     if (obj[str[i]] == undefined) {
//         obj[str[i]] = 1;
//     }
//     else {
//         obj[str[i]] += 1;
//     }
// }
// console.log(obj)

// let arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c', 'd', 'b', 'd', 's', 'f', 'e']
// let arrlen = arr.length;
// let obj1 = {}
// // console.log(arrlen)
// for (let i = 0; i < arrlen; i++) {
//     if (obj1[arr[i]]) {
//         obj1[arr[i]] += 1
//     }
//     else {
//         obj1[arr[i]] = 1
//     }
// }
// console.log(obj1)
const data = [1, 2, 3, 4, 5];
const sum = data.reduce((accumulator, current) => accumulator + current);
console.log(sum);
