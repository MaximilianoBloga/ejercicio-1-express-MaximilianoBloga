const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('<h1>Página Principal</h1><a href="/acerca">Acerca</a>');
});

// Ruta "Acerca"
app.get('/acerca', (req, res) => {
  res.send('<h1>Acerca</h1><a href="/contacto">Contacto</a>');
});

// Ruta "Contacto"
app.get('/contacto', (req, res) => {
  res.send('<h1>Contacto</h1><a href="/acerca">Acerca</a>');
});

// Middleware básico para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '¡Algo salió mal!' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
}); 