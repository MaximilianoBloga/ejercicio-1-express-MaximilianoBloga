const express = require('express');
//const path = require('path');
const app = express();

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public')); // Esto también sirve para servir archivos estáticos desde la carpeta 'public'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/resultado', (req, res) => {
    const lenguaje = req.body.lenguaje;

    res.send(`
        <h1>Tu lenguaje favorito es ${lenguaje}</h1>
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