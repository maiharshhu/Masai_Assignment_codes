function createCar(make,model,year){
    return {
        make:make,
        model:model,
        year:year,
        describeCar: function describeCar(){
            console.log(`This car is a ${year} ${make} ${model}`)
        }
    }
}

const car = createCar("Toyota", "Camry", 2022);
car.describeCar();
// Output: This car is a 2022 Toyota Camry.
