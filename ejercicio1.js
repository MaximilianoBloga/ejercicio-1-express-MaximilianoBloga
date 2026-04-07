const express = require('express');
const app = express();  

const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Hola mundo del ejercicio 1!!!');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
