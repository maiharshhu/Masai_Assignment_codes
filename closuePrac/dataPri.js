function createCounter(){
    let count = 0; // Private variable
    return{
        increment: function(){// Method to increase count value
            count++;
            return count
        },
            getCount: function(){ //to get value of count
                return count
            }
        }
}

const counter = createCounter(); // Create a new counter instance
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount());