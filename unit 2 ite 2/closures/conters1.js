function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    }
  };
}


const counter = createCounter();

console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.getCount());  
