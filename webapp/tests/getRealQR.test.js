// Unit testing using jest
const { getFakeQR } = require('../qr-api-calls');

apiUrl = 'http://api-qr.foulonneau.com';

//  Handle async 
test('getRealQR should return a base64 encoded image', async () => {
    const fakeqr = await getFakeQR(apiUrl,"foulonneau.com");
    expect(fakeqr).toMatch(/^data:image\/png;base64,.*/);
});
