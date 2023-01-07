// Import nodejs and express
const express = require('express');
const app = express();
//Import QR generator library
const QRCode = require('qrcode');
//Port to listen on
const port = 3000;
//Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
//Health route
app.get('/health', (req, res) => {
    res.send('OK');
});
//Collection of youtube rickroll links
const rickRolls = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=QH2-TGUlwu4",
    "https://www.youtube.com/watch?v=GtL1huin9EE",
    "https://www.youtube.com/watch?v=GBIIQ0kP15E",
    "https://www.youtube.com/watch?v=xm3YgoEiEDc"
];

function getRandomRickRollLink() {
    return rickRolls[Math.floor(Math.random() * rickRolls.length)];
}


//Generate Fake QR Code
app.get("/qr", (req, res) => {
    const json = req.query.json;
    console.log(getRandomRickRollLink());
    QRCode.toDataURL(getRandomRickRollLink(), (err, url) => {
        res.send(url);
    });
});
//Generate Real QR Code
app.get("/qr/real", (req, res) => {
    const url = req.query.url;
    QRCode.toDataURL(url, (err, url) => {
        res.send(url);
    });
});
