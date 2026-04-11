const express = require('express');
const app = express();

app.use(express.static('public'));

// Ruta de la API
app.get('/api/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Laptop Pro', precio: 1299,
      categoria: 'Electrónica', stock: 15 },
    { id: 2, nombre: 'Teclado Mecánico', precio: 89,
      categoria: 'Periféricos', stock: 42 },
    { id: 3, nombre: 'Monitor 4K', precio: 549,
      categoria: 'Pantallas', stock: 8 },
    { id: 4, nombre: 'Mouse Inalámbrico', precio: 45,
      categoria: 'Periféricos', stock: 67 },
  ];
  res.json(productos);
});

app.listen(3000);