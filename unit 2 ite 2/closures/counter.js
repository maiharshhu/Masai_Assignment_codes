function createCounter() {
  let count = 0;

  function counter() {
    return ++count;
  }

  counter.reset = function () {
    count = 0;
  };

  return counter;
}

const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
counter.reset();
console.log(counter()); 
