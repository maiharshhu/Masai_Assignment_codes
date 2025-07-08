function Animal() {
  this.type = "Animal";
}

Animal.prototype.sound = function() {
  console.log("Animal sound");
};

function Dog() {
  Animal.call(this); // inherit properties
}

Dog.prototype = Object.create(Animal.prototype); // inherit methods
Dog.prototype.constructor = Dog; // fix constructor

Dog.prototype.sound = function() {
  console.log("Bark");
};

let myDog = new Dog();
myDog.sound(); 
