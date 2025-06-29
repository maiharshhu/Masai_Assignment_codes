let car = {
  brand: "Tesla",
  getBrand: function() {
    return this.brand;
  }
};


let nwcar = {
    brand : "Toyota",
};

console.log("Before binding",car.getBrand())

let boundGetBrand = car.getBrand.bind(nwcar)

console.log("After binding",boundGetBrand())
// let boundGetBrand = car.getBrand.bind(car);
// console.log(boundGetBrand());  // Output: "Tesla"
