let n = 5;
let emp = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        emp += j
        // console.log(emp)
    }
    console.log(emp)
}
console.log(emp)