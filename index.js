var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var api = require('./medblock.js');

app.use('/api', api);


 app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

 var port = process.env.PORT || 8080; 
 app.listen(port);