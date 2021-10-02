var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();
var server = http.createServer(app);

app.use('/static', express.static('static'))
app.use('/preview', express.static('html'))

function renderView(res, name) {
    res.sendFile(__dirname + '/html/' + name.toString() + '.html');
}

app.get('/', (req, res) => {
    renderView(res, 'index');
});

app.listen(8080);
