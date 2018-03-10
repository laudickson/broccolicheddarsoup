var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { 'extended': 'false' } ))
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/book', book);

app.use(function(request, response, next){
  var error = new Error("This is a 404, this page unfortunately hasn't been built out yet. sorry :(");
  error.status = 404;
  next(error);
});

app.use(function(error, request, response, next){
  response.locals.message = error.message;
  if ( request.app.get('env') === 'development' ){
    response.locals.error = error;
  } else {
    response.locals.error = {};
  }

  response.status(error.status || 500);
  response.render('error');
});

module.exports = app;
