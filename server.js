var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var path = require('path');
var passwordHash = require('password-hash');

var database = require('./core/database.js');

var app = express();
var server = http.createServer(app);

var salt = "jF9&Yt";
var hashedPass = passwordHash.generate("password" + salt);
console.log(passwordHash.verify("password" + salt, hashedPass));

app.use('/static', express.static('static'));
app.use('/html', express.static('html'));
app.use('/preview', express.static('html'));
app.use('/img', express.static('img'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'html'));

function renderView(res, name, params) {
    res.render(name.toString() + '.html', params);
}

async function main() {
    var collection = await database.test();
    app.get('/', (req, res) => {
        renderView(res, 'index', {fname: '/html/homepage.html'});
    });
    app.get('/testing', (req, res) => {
        let file = req.query.page;
        renderView(res, 'index', {fname: '/html/' + file + '.html'});
    });
}

main();

app.listen(8080);
