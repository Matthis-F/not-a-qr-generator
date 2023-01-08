const http = require('http');

async function getFakeQR(apiServerBaseurl) {
    return new Promise((resolve, reject) => {
        http.get(apiServerBaseurl+'/qr', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            resolve(data);
        });

        }).on("error", (err) => {
        reject(err);
        });
    });
}

async function getRealQR(urlToEncode,apiServerBaseurl) {
    return new Promise((resolve, reject) => {
    http.get(apiServerBaseurl+'/qr/real?url='+urlToEncode, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
        data += chunk;
        });

        resp.on('end', () => {
        resolve(data);
        });

    }).on("error", (err) => {
        reject(err);
    });
    });
}

exports.getFakeQR = getFakeQR;
exports.getRealQR = getRealQR;
