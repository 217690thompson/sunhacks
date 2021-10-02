var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var session = require('express-session');
var path = require('path');
var crypto = require('crypto');

var database = require('./core/database.js');

var app = express();
var server = http.createServer(app);

var salt = "jF9&Yt";
// var hashedPass = passwordHash.generate("password" + salt);
// console.log(passwordHash.verify("password" + salt, hashedPass));

app.use('/static', express.static('static'));
app.use('/html', express.static('html'));
app.use('/preview', express.static('html'));
app.use('/img', express.static('img'));
app.use('/core', express.static('core'));
app.use(express.urlencoded());
app.use(express.json());
app.use(session({secret: 'ssshhh'}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'html'));

function renderView(res, name, params) {
    res.render(name.toString() + '.html', params);
}

var sess;

async function main() {
    // let user = await database.selectOne('user', {login: "test"});
    // let hashedPass = passwordHash.generate("Sunhacks21" + salt);
    // console.log(passwordHash.verify(user.password, hashedPass));

    // get methods
    app.get('/login', (req, res) => {
        let fail;
        if (res.query) {
            fail = query.failed;
        }
        renderView(res, 'index', {fname: '/html/login.html', failed: fail});
    });
    app.get('/', (req, res) => {
        renderView(res, 'index', {fname: '/html/homepage.html'});
    });
    app.get('/testing', (req, res) => {
        let file = req.query.page;
        renderView(res, 'index', {fname: '/html/' + file + '.html'});
    });

    // post methods
    app.post('/login', async function(req, res) {
        if (! req.body) {
            console.log(req);
            res.redirect("/login?failed=1");
        }
        var username = req.body.username;
        var password = req.body.password;
        let user;
        let prom = database.selectOne('user', {login: username});
        Promise.resolve(prom).then((result) => {user = result;});
        await prom;
        if (user) {
            console.log(user.password);
            let hashedPass = crypto.createHash('sha1').update(password + salt).digest('hex');
            if (hashedPass != user.password) {
                console.log(hashedPass, user, '1');
                res.redirect("/login?failed=1");
            } else {
                res.redirect("/");
            }
        } else {
            res.redirect("/login?failed=1");
        }
    });
}

main();

app.listen(8080);
