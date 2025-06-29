let original = { name: "Alice", hobbies: ["reading", "traveling"] }

function deepClone(obj){
    let result = JSON.parse(JSON.stringify(obj))
    return result
}

let clone = deepClone(original)

clone.hobbies.push("coding")
console.log(clone)
console.log(original)




