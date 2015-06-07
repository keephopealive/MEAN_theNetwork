var express = require('express')
var app = express()
var server = app.listen(1337)

// Sockets
io = require('socket.io').listen(server)

// Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// Session
var session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// Templating Engine
app.set("view engine", "ejs")
app.set("views", (__dirname + "/server/views"))

app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/client/guest'))
app.use(express.static(__dirname + '/client/user'))


// Mongoose
require('./server/config/mongoose.js');
// SQL
require('./server/config/sql.js');
// HTTP Routes`	
require('./server/config/routes.js')(app);
// Socket Routes
require('./server/config/socket.routes.js')(app);



