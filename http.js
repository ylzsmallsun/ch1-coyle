var express = require("express");
var compression = require("compression");
var app = express();
var fs = require('fs');


var key = fs.readFileSync('private.key');
var cert = fs.readFileSync('mydomain.crt');

var options = {
    key: key,
    cert: cert
};
// Run static server
app.use(compression());
app.use(express.static(__dirname));

var https = require('https');
https.createServer(options, app).listen(8889);
//app.listen(8888);
