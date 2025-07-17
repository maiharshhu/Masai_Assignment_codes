function Animal(name,weight){
    this.name=name;
    this.weight = weight;
}

Animal.prototype.speak = function(){
    console.log(`${this.name} makes a sound.`);
};

Animal.prototype.info = function(){
  console.log(`Name: ${this.name}, Weight: ${this.weight}`);
};

function Bird(name,weight,canFly){
    Animal.call(this, name, weight);
    this.canFly = canFly;
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.speak = function(){
    console.log(`${this.name} chirps.`)
};

class AnimalC{
    constructor(name,weight){
        this.name = name;
        this.weight = weight;
    }
    speak(){
      console.log(`${this.name} makes a sound.`);
    }
    info() {
    console.log(`Name: ${this.name}, Weight: ${this.weight}`);
  }
}

class BirdC extends AnimalC {
  constructor(name, weight, canFly) {
    super(name, weight);
    this.canFly = canFly;
  }
  speak() {
    console.log(`${this.name} chirps.`);
  }
}
