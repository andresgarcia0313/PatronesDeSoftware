/*
Dependency Injection
Este patrón proporciona una forma de inyectar dependencias en una clase en lugar de que la clase cree las dependencias por sí misma.
*/
class Service {
    operation() {
        return "Operación del servicio";
    }
}

class Client {
    constructor(service) {
        this.service = service;
    }

    execute() {
        return this.service.operation();
    }
}

const service = new Service();
const client = new Client(service);
console.log(client.execute()); // "Operación del servicio"
