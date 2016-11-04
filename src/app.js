'use strict';

var express = require('express');
var router = require('./api');

var app = express();

app.use('/', express.static('public'));

//Mount router to the 'api' namespace.
app.use('/api', router);

app.listen(3000, function() {
  console.log('Server is running on port 3000!');
})