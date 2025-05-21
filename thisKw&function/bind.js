let car = {
    brand:"Tata",
    getBrand: function() {
        return this.brand;
    }
}

let getCarBrand = car.getBrand.bind(car);
console.log(getCarBrand()); // Tata