function Car(make, model, year, isAvailable = true, type = "Sedan") {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isAvailable = isAvailable;
  this.type = type;
}

function Customer(name) {
  this.name = name;
  this.rentedCars = [];
}

Customer.prototype.rentCar = function(car) {
  if (car.isAvailable) {
    car.isAvailable = false;
    this.rentedCars.push(car);
    console.log(`${this.name} has rented the ${car.make} ${car.model}.`);
  } else {
    console.log(`${car.make} ${car.model} is already rented.`);
  }
};

function PremiumCustomer(name, discountRate) {
  Customer.call(this, name); // inherit properties
  this.discountRate = discountRate;
}

// Set prototype chain
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

function calculateRentalPrice(car, days, customer) {
  const basePricePerDay = 50;
  let typeMultiplier = 1;

  if (car.type === "SUV") typeMultiplier = 1.5;
  else if (car.type === "Sedan") typeMultiplier = 1.2;

  let price = basePricePerDay * typeMultiplier * days;

  // Apply discount for premium customers
  if (customer instanceof PremiumCustomer) {
    price = price * (1 - customer.discountRate / 100);
  }

  return price;
}


Customer.prototype.returnCar = function(car) {
  setTimeout(() => {
    car.isAvailable = true;
    this.rentedCars = this.rentedCars.filter(c => c !== car);
    console.log(`${this.name} has returned the ${car.make} ${car.model}.`);
  }, 2000);
};


function Maintenance(car, delay) {
  setTimeout(() => {
    car.isAvailable = true;
    console.log(`${car.make} ${car.model} is now available after maintenance.`);
  }, delay);
}


// Create car objects
let car1 = new Car("Toyota", "Camry", 2020, true, "Sedan");
let car2 = new Car("Ford", "Explorer", 2021, true, "SUV");

// Create customers
let alice = new Customer("Alice");
let bob = new PremiumCustomer("Bob", 10); // 10% discount

// Rent cars
alice.rentCar(car1);  // Alice rents Toyota Camry
bob.rentCar(car2);    // Bob rents Ford Explorer

// Show rental price
console.log("Rental price for Alice:", calculateRentalPrice(car1, 3, alice)); // Regular price
console.log("Rental price for Bob:", calculateRentalPrice(car2, 3, bob));     // Discounted price

// Return car
alice.returnCar(car1);
bob.returnCar(car2);

// Maintenance
Maintenance(car2, 3000);

Customer.prototype.customRent = function(car) {
  console.log(`${this.name} custom renting: ${car.make} ${car.model}`);
};

alice.customRent.call(bob, car1); // Bob custom renting Toyota Camry

Customer.prototype.intro = function(greeting, location) {
  console.log(`${greeting}, I'm ${this.name} from ${location}`);
};

alice.intro.apply(bob, ["Hi", "Delhi"]);

let boundReturn = alice.returnCar.bind(alice, car1);
boundReturn(); // will execute after 2 seconds

