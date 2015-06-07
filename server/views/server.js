var express = require("express");
var app = express();
var port = process.env.PORT || 1337

var mongoose = require('mongoose')

var bodyParser = require('body-parser')
app.use(bodyParser()); 

var cookieParser = require('cookie-parser');
app.use(cookieParser()); 

var session = require('express-session')
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use(logger('dev')); 


app.listen(port);