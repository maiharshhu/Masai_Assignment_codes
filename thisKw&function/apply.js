let multiplyNumber = {
    mul: function (a, b) {
        return a * b;
    }
}

let multiply = multiplyNumber.mul.apply(this, [5, 10]);
console.log(multiply); // 50