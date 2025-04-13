function primeNumber(num) {
    // write code here
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
        }
        else {
            flag = true;
        }
    }
    if (flag == true) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

primeNumber(10)
