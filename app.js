const express = require('express');
const app = express();

let visitas = 0;

app.get('/', (req, res) => {
    visitas++;
    res.send(`
        <h1>Página Principal</h1>
        <p>Esta página fue visitada ${visitas} veces desde que inició el servidor.</p>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});