function createCounter(label){
    let count = 0
    return function() {
        count++;
        console.log(`Counter "${label}" is now at ${count}`);
    }
}

const loginCounter = createCounter("Login Clicks");
loginCounter();
loginCounter();
loginCounter();

const user = {
  name: "Riya",
  greet(msg) {
    console.log(`${msg}, ${this.name}!`);
  }
}

user.greet.call({name:"Riya"},"Hello");

user.greet.apply({name:"Riya"},["Hello"]);

const bound = user.greet.bind({name:"Riya"},"Welcome");
bound();

function delayedGreet(name,callback){
    setTimeout(() => {
        console.log(`Hello, ${name}!`)
    }, 2000);
}

delayedGreet("Riya", (msg)=>console.log(msg));