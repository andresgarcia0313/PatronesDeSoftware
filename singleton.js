/*
Este patrón asegura que una clase tenga solo una instancia.
*/

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.data = [];
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    addData(item) {
        this.data.push(item);
    }

    getData() {
        return this.data;
    }
}

const instance1 = new Singleton();
instance1.addData("Primero");

const instance2 = new Singleton();
instance2.addData("Segundo");

console.log(instance1.getData()); // ["Primero", "Segundo"]
console.log(instance1 === instance2); // true
