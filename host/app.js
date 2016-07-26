var express = require('express'),
    api     = require('../api/app'),
    app     = express();

app.use('/api', api);
module.exports = app;