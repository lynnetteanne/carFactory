class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `This is a ${this.year} ${this.make} ${this.model}`;
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year)
        this.range = range;
    }
    getNewDescription(){
        return `${super.getDescription} with a range of ${this.range} miles.`;
    }
}


const vehicle = new ElectricCar("Tesla", "Model S", 2019, 300); {
console.log(vehicle.getNewDescription());
}