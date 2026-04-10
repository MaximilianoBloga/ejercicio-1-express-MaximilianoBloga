const express = require('express');
//const path = require('path');
const app = express();

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public')); // Esto también sirve para servir archivos estáticos desde la carpeta 'public'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/contacto', (req, res) => {
    const nombre = req.body.nombre;
    const mensaje = req.body.mensaje;

    res.send(`
        <h1>Datos recibidos</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        <a href="/">Volver</a>
    `);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});