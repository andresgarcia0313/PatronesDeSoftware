const express = require('express');
const app = express();

app.get('/usuarios', (req, res) => {
    res.send({
        usuarios: [
            { id: 1, nombre: 'Andrés', links: [{ rel: 'self', href: 'http://localhost:3000/usuarios/1' }] },
            { id: 2, nombre: 'Katherin', links: [{ rel: 'self', href: 'http://localhost:3000/usuarios/2' }] }
        ]
    });
});

app.get('/usuarios/:id', (req, res) => {
    res.send({
        id: req.params.id,
        nombre: req.params.id == 1 ? 'Andrés' : 'Katherin',
        links: [{ rel: 'self', href: `http://localhost:3000/usuarios/${req.params.id}` }]
    });
});

app.listen(3000, () => {
    console.log('API HATEOAS escuchando en el puerto 3000');
});
