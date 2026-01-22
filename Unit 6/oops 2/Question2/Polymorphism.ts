// 1. Base Class
class PolyDuck {
    fly() {
        console.log("Duck is flying");
    }
}

// 2. Child Classes with unique implementations
class DesiDuck extends PolyDuck {
    fly() {
        console.log("DesiDuck flies at 10kmph");
    }
}

class VidesiDuck extends PolyDuck {
    fly() {
        console.log("VidesiDuck flies at 20kmph");
    }
}

class SmartDuck extends PolyDuck {
    fly() {
        console.log("SmartDuck flies at 50kmph");
    }
}

// 3. Function demonstrating Polymorphism
function makeDuckFly(duck: PolyDuck) {
    duck.fly(); // Calls the specific version of fly() for whichever duck is passed
}

// Execution
makeDuckFly(new DesiDuck());
makeDuckFly(new VidesiDuck());
makeDuckFly(new SmartDuck());