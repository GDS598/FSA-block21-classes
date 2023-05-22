class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    getDescription() {
        return 'This car is a ' + this.year + ' ' + this.make + ' ' + this.model + '.'
    } 
}

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year)
        this.range = range
    }

    getDescription() {
        return `This car is a ${this.year} ${this.make} ${this.model} and has a range of ${this.range} miles.`
    }
}

 
const myCar = new Car('Hyundai', 'Accent', '2014')
console.log(myCar.getDescription())

const myTesla = new ElectricCar('Tesla', 'Model S', 2024, 554)
console.log(myTesla.getDescription())