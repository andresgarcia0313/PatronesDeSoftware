/*
Permite que interfases incompatibles trabajen juntas.
*/

class OldSystem {
    constructor() {
        this.operation = function () {
            return "Operación antigua";
        };
    }
}

class NewSystem {
    constructor() {
        this.operation = function () {
            return "Operación nueva";
        };
    }
}

class Adapter {
    constructor() {
        const oldSystem = new OldSystem();
        this.operation = function () {
            return oldSystem.operation();
        };
    }
}

const adapter = new Adapter();
console.log(adapter.operation()); // "Operación antigua"
