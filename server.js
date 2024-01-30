

const https = require('https');
const fs = require('fs');
const express = require('express');

const privateKey = fs.readFileSync('private-key.pem', 'utf8');
const certificate = fs.readFileSync('certificate.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo seguro!');
});

const httpsServer = https.createServer(credentials, app);

const PORT = process.env.PORT || 3000;

httpsServer.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}/`);
});
