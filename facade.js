/*
Proporciona una interfase simplificada a un conjunto de interfases en un subsistema.
*/
class CPU {
    start() {
        console.log("CPU iniciada");
    }
}

class Memory {
    load() {
        console.log("Memoria cargada");
    }
}

class HardDrive {
    read() {
        console.log("Disco duro leído");
    }
}

class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    start() {
        this.cpu.start();
        this.memory.load();
        this.hardDrive.read();
    }
}

const computer = new ComputerFacade();
computer.start();
// CPU iniciada
// Memoria cargada
// Disco duro leído
