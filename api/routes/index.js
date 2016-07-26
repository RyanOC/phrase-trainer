var express  = require('express'),
    routes   = require('./routes'),
    parser   = require('body-parser'),
    app      = express();

app.use('/', routes);
module.exports = app;