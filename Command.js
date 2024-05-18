/*
Command
Este patrón encapsula una solicitud como un objeto, lo que permite parametrizar clientes con diferentes solicitudes, colas o registros de solicitudes, y soporte para deshacer operaciones.
*/
class Command {
    execute() {
        throw new Error('Método execute() debe ser implementado');
    }
}

class Light {
    turnOn() {
        console.log('Luz encendida');
    }

    turnOff() {
        console.log('Luz apagada');
    }
}

class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}

class RemoteControl {
    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton(); // Luz encendida

remote.setCommand(lightOff);
remote.pressButton(); // Luz apagada
