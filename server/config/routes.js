module.exports = function(app) {
  	var users = require('../controllers/users.js')
  	var sessions = require('../controllers/sessions.js')
  	var sql = require('../config/sql.js')

  	// Root
    app.get('/', function(request, response) {
	  // users.retrieve(request, response)
	  // response.render('index.ejs')
	  // response.json
		sql.retrieve(request, response);

	})
	app.get('/dashboard', function(request, response){
		console.log("A")
		sql.retrieve(request, response);

		// response.render('dashboard')
	})

// User

    // Index
	app.get('/users', function(request, response) { users.retrieve(request, response) })
	// New
	app.get('/users/new', function(request, response) { users.create(request, response) })
	// Show
	app.get('/users/:id', function(request, response) { users.show(request, response) })
	// Edit 
	app.post('/users/:id/edit', function(request, response) { users.update(request, response) })
	// Create
	app.post('/users', function(request, response) { users.create(request, response) })	
	// Destroy app.delete('/users/:id')
	app.post('/users/:id/destroy', function(request, response) { users.destroy(request, response) })
	// Update app.put/patch('/users/:id') 
	app.post('/users/:id/update', function(request, response) { users.update(request, response) })

// Session

	// Index
	app.get('/sessions', function(request, response) { sessions.retrieve(request, response) })
	// New
	app.get('/sessions/new', function(request, response) { sessions.create(request, response) })
	// Show
	app.get('/sessions/:id', function(request, response) { sessions.show(request, response) })
	// Edit 
	app.post('/sessions/:id/edit', function(request, response) { sessions.update(request, response) })
	// Create
	app.post('/sessions', function(request, response) { sessions.create(request, response) })	
	// Destroy app.delete('/sessions/:id')
	app.post('/sessions/:id/destroy', function(request, response) { sessions.destroy(request, response) })
	// Update app.put/patch('/sessions/:id') 
	app.post('/sessions/:id/update', function(request, response) { sessions.update(request, response) })
}