//Create web app using pug that calls the /qr/real endpoint

const express = require('express');
const ejs = require('ejs');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", (req, res) => {
    res.render("index", { title: "Mdrlol" ,userprofile: "Matthis Foulonneau" });
  });

app.get("/qr/real", (req, res) => {
  request('http://localhost:3000/qr/real?url='+req.query.url, function (error, response, body) {
    if (!error) {
      console.log(req.query.url); 
      res.render("realqr", { title: "Mdrlol" ,qr: body, url: req.query.url });
    }
  });
});

app.get("/qr", (req, res) => {
  request('http://localhost:3000/qr', function (error, response, body) {
    if (!error) {
      console.log(req.query.url); 
      res.render("qr", { title: "Mdrlol" ,qr: body, url: req.query.url });
    }
  });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
  
