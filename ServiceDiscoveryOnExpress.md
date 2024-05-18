Para implementar el **Service Discovery** utilizando únicamente Express.js, se puede simular un mecanismo de descubrimiento de servicios mediante la creación de un registro simple que mantenga la información de los servicios disponibles y sus direcciones. Este registro puede ser una estructura de datos en memoria o una base de datos ligera. Aquí te muestro un ejemplo básico:

### Paso 1: Crear un Registro de Servicios
Este servicio actuará como un registro central donde otros servicios se registrarán y descubrirán entre sí.

```javascript
const express = require('express');
const app = express();
app.use(express.json());

const services = {};

// Endpoint para registrar un nuevo servicio
app.post('/register', (req, res) => {
    const { name, address, port } = req.body;
    services[name] = { address, port };
    res.send(`Servicio ${name} registrado en ${address}:${port}`);
});

// Endpoint para obtener la dirección de un servicio por su nombre
app.get('/discover/:serviceName', (req, res) => {
    const serviceName = req.params.serviceName;
    const service = services[serviceName];
    if (service) {
        res.send(service);
    } else {
        res.status(404).send(`Servicio ${serviceName} no encontrado`);
    }
});

app.listen(4000, () => {
    console.log('Registro de servicios escuchando en el puerto 4000');
});
```

### Paso 2: Crear Servicios que se Registren en el Registro Central
Cada microservicio debe registrarse en el registro central cuando se inicie.

#### Servicio A

```javascript
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const serviceName = 'serviceA';
const serviceAddress = 'http://localhost';
const servicePort = 3001;

// Registrar el servicio en el registro central
axios.post('http://localhost:4000/register', {
    name: serviceName,
    address: serviceAddress,
    port: servicePort
}).then(() => {
    console.log(`${serviceName} registrado con éxito`);
}).catch(err => {
    console.error(`Error al registrar ${serviceName}:`, err.message);
});

app.get('/hello', (req, res) => {
    res.send('Hola desde Service A');
});

app.listen(servicePort, () => {
    console.log(`Service A escuchando en el puerto ${servicePort}`);
});
```

#### Servicio B

```javascript
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const serviceName = 'serviceB';
const serviceAddress = 'http://localhost';
const servicePort = 3002;

// Registrar el servicio en el registro central
axios.post('http://localhost:4000/register', {
    name: serviceName,
    address: serviceAddress,
    port: servicePort
}).then(() => {
    console.log(`${serviceName} registrado con éxito`);
}).catch(err => {
    console.error(`Error al registrar ${serviceName}:`, err.message);
});

app.get('/world', (req, res) => {
    res.send('Hola desde Service B');
});

app.listen(servicePort, () => {
    console.log(`Service B escuchando en el puerto ${servicePort}`);
});
```

### Paso 3: Descubrir y Consumir Servicios
Supongamos que un cliente quiere consumir los servicios A y B.

```javascript
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/consume', async (req, res) => {
    try {
        // Descubrir Service A
        const serviceA = await axios.get('http://localhost:4000/discover/serviceA');
        const serviceAResponse = await axios.get(`${serviceA.data.address}:${serviceA.data.port}/hello`);

        // Descubrir Service B
        const serviceB = await axios.get('http://localhost:4000/discover/serviceB');
        const serviceBResponse = await axios.get(`${serviceB.data.address}:${serviceB.data.port}/world`);

        res.send({
            serviceA: serviceAResponse.data,
            serviceB: serviceBResponse.data
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log('Cliente escuchando en el puerto 3000');
});
```

### Resumen
1. **Registro de Servicios**: Un servidor central que mantiene un registro de servicios y sus direcciones.
2. **Microservicios**: Cada microservicio se registra en el registro central al iniciar.
3. **Cliente**: Un cliente que descubre los servicios a través del registro central y los consume.

Este es un ejemplo básico de cómo puedes implementar el descubrimiento de servicios usando solo Express.js. 😊 Este enfoque puede ser ampliado y mejorado con una base de datos para persistir los registros y añadir funcionalidades como la verificación de salud de los servicios. 🎉