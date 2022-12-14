//Create web app using pug that calls the /qr/real endpoint

const express = require('express');
const path = require("path");
const app = express();
const port = 8080;
const apiServerBaseurl = "http://api_server:3000";
const { getFakeQR, getRealQR } = require('./qr-api-calls');

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('./'))

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
app.get("/result", async (req, res) => {
    // Get text variables inside url
    const url = req.query.url;
    // wait for async function to finish
    const fakeqr = await getFakeQR(apiServerBaseurl);
    const realqr = await getRealQR(url,apiServerBaseurl);

    // Render result page
    res.render("result", { title: "QR", fake:fakeqr, real:realqr});
});

console.log("Starting Webapp");
app.listen(port, () => {
    console.log(`Webapp listening at http://localhost:${port}`);
});

// Export functions for unit testing
module.exports = {
    getFakeQR,
    getRealQR
};
