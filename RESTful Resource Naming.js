/*
RESTful Resource Naming
Estructura y diseña APIs de manera efectiva.
*/
const express = require('express');
const app = express();
app.use(express.json());

app.get('/usuarios', (req, res) => {
    res.send([{ id: 1, nombre: 'Andrés' }, { id: 2, nombre: 'Katherin' }]);
});

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    res.status(201).send(nuevoUsuario);
});

app.listen(3000, () => {
    console.log('API RESTful escuchando en el puerto 3000');
});
