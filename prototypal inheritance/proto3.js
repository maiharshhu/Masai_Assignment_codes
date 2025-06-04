function Car(make, model, year, type, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type; 
    this.isAvailable = isAvailable;
}

function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented ${car.make} ${car.model}`);
    } else {
        console.log(`${car.make} ${car.model} is already rented.`);
    }
};

Customer.prototype.returnCar = function(car) {
    let idx = this.rentedCars.indexOf(car);
    if (idx !== -1) {
        setTimeout(() => {
            car.isAvailable = true;
            this.rentedCars.splice(idx, 1);
            console.log(`${this.name} returned ${car.make} ${car.model}`);
        }, 2000);
    } else {
        console.log(`${this.name} did not rent this car.`);
    }
};


function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate; // e.g., 0.1 for 10%
}
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;


function calculateRentalPrice(car, days, customer) {
    let basePrice = 50;
    let typeRates = { SUV: 1.5, Sedan: 1.2, Hatchback: 1.0 };
    let rate = typeRates[car.type] || 1.0;
    let price = basePrice * rate * days;
    if (customer.discountRate) {
        price = price * (1 - customer.discountRate);
    }
    return price;
}

function Maintenance(car, delay) {
    car.isAvailable = false;
    console.log(`${car.make} ${car.model} is under maintenance.`);
    setTimeout(function() {
        car.isAvailable = true;
        console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}


let car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
let car2 = new Car("Honda", "CRV", 2021, "SUV");
let car3 = new Car("Hyundai", "i20", 2019, "Hatchback");


let alice = new Customer("Alice");
let bob = new PremiumCustomer("Bob", 0.1);


alice.rentCar(car1);
bob.rentCar(car2);


alice.rentCar(car2);

console.log("Alice's price:", calculateRentalPrice(car1, 3, alice)); 
console.log("Bob's price:", calculateRentalPrice(car2, 3, bob));     


alice.returnCar(car1);
bob.returnCar(car2);


Maintenance(car3, 2000);


function showCustomerInfo(extra) {
    console.log(`Customer: ${this.name}, Extra: ${extra}`);
}
showCustomerInfo.call(alice, "Regular");
showCustomerInfo.apply(bob, ["Premium"]);
let boundShow = showCustomerInfo.bind(alice, "Bound Example");
boundShow();