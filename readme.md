<a name="readme-top"></a>
<!-- Center Shields -->
<div align="center">

[![Contributors](https://img.shields.io/github/contributors/Matthis-F/not-a-qr-generator?style=for-the-badge)](https://github.com/Matthis-F/not-a-qr-generator/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/Matthis-F/not-a-qr-generator?style=for-the-badge)](https://github.com/Matthis-F/not-a-qr-generator/network/members)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Matthis%20Foulonneau-blue?style=for-the-badge)](https://www.linkedin.com/in/foulonneau/)

</div>

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="ressources/logo.svg" alt="Logo" width="150" height="150"   >
  </a>

  <h2 align="center" ><b>This is Not A QR Code Generator</b></h2>

  <p align="center">
    A very simple web app intended as a school project, this project was used to learn CI/CD and Unit Testing
    <br />
    <br />
    <a href="qr.foulonneau.com">View Demo</a>
    ·
    <a href="https://github.com/Matthis-F/not-a-qr-generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/Matthis-F/not-a-qr-generator/">Request Feature</a>
  </p>
</div>

## Table of Contents

* [About The Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)



## About The Project
Not A QR Genertaor is a simple web app that allows you to generate Rickroll QR codes from a text input.

It provides an API to get random Rickroll QR codes plus a web app to gracefully display them.
It also has the capability to generate real QR codes from the original text input.

![Webapp Screen Shot](ressources/Screenshot.png)

### Built With
| API | Webapp |
| --- | --- |
| [Nodejs](https://nodejs.org/en/) | [Nodejs](https://nodejs.org/en/) |
| [Express](https://expressjs.com/) | [Express](https://expressjs.com/) |
| [qrcode](https://www.npmjs.com/package/qrcode)| [PUGjs](https://pugjs.org/api/getting-started.html) |

## Getting Started
### API
#### Build and run
```sh
cd server
npm install
npm run start
```
#### Development
```sh
cd server
npm install
npm run dev
```
#### API Documentation
Only two endpoints are available, one to get a random Rickroll QR code and one to get a Rickroll QR code from the text input.
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/qr | Get a random Rickroll QR code |
| GET | /api/qr/real?text | Get a Rickroll QR code from the text input |

### Webapp
#### Build and run
```sh
cd webapp
npm install
npm run start
```
#### Development
```sh
cd webapp
npm install
npm run dev
```

## Contact
Matthis Foulonneau - [LinkedIn](https://www.linkedin.com/in/foulonneau/) - [Email](mailto:matthis@foulonneau.com)

## License
GPL-3.0 License



