var request = require('request');
let fs=require('fs');
var URL = 'https://spb.cian.ru/kupit-kvartiru-1-komn-ili-2-komn/';
request(URL, function (err, res, body) {
    if (err) throw err;
    fs.writeFileSync("pars/responce.html", body)
    console.log(res.statusCode);
});

