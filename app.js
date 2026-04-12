const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/saludar', (req, res) => {
  const { nombre } = req.body;
  res.json({ mensaje: `Hola, ${nombre}!` });
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));