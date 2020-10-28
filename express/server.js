const express = require('express');
const cors = require('cors');
const app = express();
const HOST = '0.0.0.0'
const PORT = 80;

app.use(cors());

app.get('/getPlayers', (req, res) => {
    res.send({
        players: [
            "Tigerwoods",
            "Roger",
            "Rafale",
            "Kobryant",
            "Valentino Rossi",
            "Marc Marquez",
            "Lewis Hamilton",
            "Cristiano Ronaldo",
            "Lionel Messi"
        ]
    });
});

app.listen(PORT, HOST);

console.log(`Express App running on http://${HOST}:${PORT}`);