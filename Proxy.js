/*
Proxy
Este patrón proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él.
*/
class RealSubject {
    request() {
        return "Solicitud real";
    }
}

class Proxy {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }

    request() {
        // Puede agregar lógica adicional antes de delegar la solicitud
        return this.realSubject.request();
    }
}

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);
console.log(proxy.request()); // "Solicitud real"
