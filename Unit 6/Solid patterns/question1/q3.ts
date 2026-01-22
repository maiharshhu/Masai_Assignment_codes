// Base class for all birds
class Bird {
    eat() {
        console.log("Eating...");
    }
}

// Intermediate class for birds that can fly
class FlyingBird extends Bird {
    fly() {
        console.log("Flying...");
    }
}

// Ostrich only inherits what it can actually do
class Ostrich extends Bird {
    // No fly() method here, so no substitution errors
}

// Mallard inherits from FlyingBird
class Mallard extends FlyingBird {}