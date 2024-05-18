/*
Circuit Breaker
Evita que los fallos en los microservicios se propaguen y afecten todo el sistema.
*/

const CircuitBreaker = require('opossum');

const options = {
    timeout: 3000, // Si una solicitud tarda más de 3 segundos, falla
    errorThresholdPercentage: 50, // Si más del 50% de las solicitudes fallan, abre el circuito
    resetTimeout: 30000 // Después de 30 segundos, intenta de nuevo
};

const breaker = new CircuitBreaker(asyncFunctionThatMightFail, options);

breaker.fallback(() => 'Servicio no disponible');

breaker.fire()
    .then(console.log)
    .catch(console.error);
