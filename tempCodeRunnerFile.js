const str = "harrrssh"
let obj = {};
let len = str.length
console.log(len)
for (let i = 0; i < len; i++) {
    if (obj[str[i]] == undefined) {
        obj[str[i]] = 1;
    }
    else {
        obj[str[i]] += 1;
    }
}
console.log(o