const express = require('express');
const app = express();

app.use(express.static('public'));

const frases = [
  "El código limpio se lee como prosa bien escrita.",
  "Primero hazlo funcionar, luego hazlo bien.",
  "Un programa que funciona es mejor que uno perfecto que no existe.",
  "La simplicidad es la máxima sofisticación.",
  "Cualquier tonto puede escribir código que una computadora entienda.",
  "El mejor código es el que no necesitas escribir.",
  "Depurar es dos veces más difícil que programar.",
  "Las horas de programación ahorran minutos de planificación.",
];

app.get('/frase', (req, res) => {
  const aleatoria = frases[Math.floor(Math.random() * frases.length)];
  res.json({ frase: aleatoria });
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));