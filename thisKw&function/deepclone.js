let obj = { name: "Alice", hobbies: ["reading", "traveling"] }


function deepClone(obj) {
    let deepcopy = JSON.parse(JSON.stringify(obj));
    deepcopy.hobbies.push("cooking");
    return deepcopy;
}

console.log(obj); // { name: "Alice", hobbies: ["reading", "traveling"] }
console.log(deepClone(obj)); // { name: "Alice", hobbies: ["reading", "traveling", "cooking"] }










