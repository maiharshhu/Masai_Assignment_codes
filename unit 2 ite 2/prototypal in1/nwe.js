function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
};

const alice = new Person("Alice");
alice.greet();
