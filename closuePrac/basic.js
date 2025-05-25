function outerFunction(){
    let message ="hello";
    return function innerFunction(){
        console.log(message);
    }
}
let c = outerFunction();
c(); // Output: hello