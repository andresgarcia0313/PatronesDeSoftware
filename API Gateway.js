/*
Un punto de entrada único para todas las interacciones con microservicios.
*/
const express = require('express');
const app = express();
const axios = require('axios');

app.get('/api/users', async (req, res) => {
    try {
        const response = await axios.get('http://users-service/users');
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/api/orders', async (req, res) => {
    try {
        const response = await axios.get('http://orders-service/orders');
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log('API Gateway escuchando en el puerto 3000');
});
