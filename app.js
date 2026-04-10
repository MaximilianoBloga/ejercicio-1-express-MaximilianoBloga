const express = require('express');
//const path = require('path');
const app = express();

let mensajes = [];

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public')); // Esto también sirve para servir archivos estáticos desde la carpeta 'public'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/resultado', (req, res) => {
    const lenguaje = req.body.lenguaje;
    const mensaje = req.body.mensaje;

    mensajes.push(mensaje);

    let lista = '';
    for (let m of mensajes) {
        lista += `<p>${m}</p>`;
    }

    res.send(`
        <h1>Tu lenguaje favorito es: ${lenguaje}</h1>
        <h2>Historial de mensajes:</h2>
        ${lista}
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