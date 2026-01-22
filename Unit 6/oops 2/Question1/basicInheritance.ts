// 1. Parent Class
class Duck {
    swim() {
        console.log("I know swimming");
    }
}

// 2. Child Class inheriting from Duck
class MallardDuck extends Duck {}

// 3. Execution
const myMallard = new MallardDuck();
myMallard.swim(); // Output: I know swimming

