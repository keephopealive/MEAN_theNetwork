module.exports = function(app) {
  	// var users = require('./../controllers/users.js')

  	// Root
    app.get('/', function(request, respond) {
	  // users.retrieve(request, respond)
	  respond.render('index')
	})
    
    // Index
	app.get('/users', function(request, respond) { /* users.retrieve(request, respond) */ })
	// New
	app.get('/users/new', function(request, respond) { /* users.create(request, respond) */ })
	// Show
	app.get('/users/:id', function(request, respond) { /* users.show(request, respond) */ })
	// Edit 
	app.post('/users/:id/edit', function(request, respond) { /* users.update(request, respond) */ })
	// Create
	app.post('/users', function(request, respond) { /* users.create(request, respond) */ })	
	// Destroy app.delete('/users/:id')
	app.post('/users/:id/destroy', function(request, respond) { /* users.destroy(request, respond) */ })
	// Update app.put/patch('/users/:id') 
	app.post('/users/:id/update', function(request, respond) { /* users.update(request, respond) */ })
  }