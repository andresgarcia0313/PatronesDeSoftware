/*
Service Discovery
Permite que los microservicios se encuentren entre sí dinámicamente. Aquí utilizamos Consul como ejemplo.
*/

const consul = require('consul')();

consul.agent.service.register(
    {
        name: 'example-service',
        address: 'localhost',
        port: 3000
    },
    err => {
        if (err)
            throw err;
        console.log('Servicio registrado con Consul');
    }
);

consul.agent.service.deregister(
    'example-service',
    err => {
        if (err)
            throw err;
        console.log('Servicio desregistrado de Consul');
    }
);
