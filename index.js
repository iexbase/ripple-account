const express = require('express');
const path = require('path');

let app = express();
const PORT = process.env.PORT || 30001;

var Twig = require('twig'),
    twig = Twig.twig;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("twig options", {
    allow_async: true,
    strict_variables: false
});


app.get('/', function(req, res)
{
    const RippleAPI = require('ripple-lib').RippleAPI;
    const api = new RippleAPI();

    let account = api.generateAddress();
    res.render('index.twig', {
        address: account.address,
        private_key: account.secret
    });
});


app.get('*', (req, res) =>
{
    global['navigator'] = req['headers']['user-agent'];
    const http = req.headers['x-forwarded-proto'] === undefined ? 'http' : req.headers['x-forwarded-proto'];
    const url = req.originalUrl;
    // tslint:disable-next-line:no-console
    console.time(`GET: ${url}`);
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
});
