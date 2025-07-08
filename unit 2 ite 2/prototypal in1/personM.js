// 1. Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 2. Add introduce method to Person.prototype
Person.prototype.introduce = function() {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// 3. Constructor function for Employee, inheriting from Person
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // inherit properties
  this.jobTitle = jobTitle;
}

// 4. Set up prototypal inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // reset constructor

// 5. Add work method to Employee.prototype
Employee.prototype.work = function() {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

let person1 = new Person("Alice", 30)
person1.introduce()

let employee1 = new Employee("Bob", 25, "Software Developer")
employee1.introduce();

employee1.work()