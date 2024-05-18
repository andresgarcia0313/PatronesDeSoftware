/*
Controla la cantidad de solicitudes que un cliente puede hacer a la API en un período específico.
*/
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // Límite de 100 solicitudes por IP por ventana de tiempo
});

app.use(limiter);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API con limitación de tasa.');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
