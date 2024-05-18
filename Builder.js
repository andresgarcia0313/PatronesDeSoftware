/*
Builder
Este patrón separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción cree diferentes representaciones.
 */
class Car {
    constructor() {
        this.make = '';
        this.model = '';
        this.year = 0;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    setMake(make) {
        this.car.make = make;
        return this;
    }

    setModel(model) {
        this.car.model = model;
        return this;
    }

    setYear(year) {
        this.car.year = year;
        return this;
    }

    build() {
        return this.car;
    }
}

const car = new CarBuilder()
    .setMake('Toyota')
    .setModel('Camry')
    .setYear(2021)
    .build();

console.log(car); // { make: 'Toyota', model: 'Camry', year: 2021 }
