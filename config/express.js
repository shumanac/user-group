var express = require('express');
var config = require('./config'),
    bodyParser = require('body-parser');

module.exports = function () {
    var app = express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    // app.set('views', './app/views');
    // app.set('view engine', 'ejs');

    require('../app/routes/application.routes.js');
    require('../app/routes/user.routes.js');

    app.use(express.static('./public'));

    return app;
};