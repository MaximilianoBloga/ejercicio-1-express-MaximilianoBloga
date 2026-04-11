const express = require('express');
const app = express();

app.use(express.static('public')); // sirve los archivos estáticos de la carpeta 'public'
app.use(express.json()); // permite leer el body JSON del POST

app.post('/api/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  res.json({ respuesta: `Gracias ${nombre}, recibimos tu mensaje. Te contactamos a ${email} pronto.` });
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));