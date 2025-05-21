let personalinfo = {
    name: "John",
    age: 20,
}

function fullName() {
    return this.name + " and age is " + this.age;
}

console.log(fullName.call(personalinfo)); // John 20