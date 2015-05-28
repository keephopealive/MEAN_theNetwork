var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {

	return {
		index: function(request, response){
			console.log("Server / Ctrl / Sessions - Index")
		},
		new: function(request, response){
			console.log("Server / Ctrl / Sessions - New")
		},
		create: function(request, response){
			console.log("Server / Ctrl / Sessions - Create")
			var newUser = new User(request.body)
			console.log("HERE", request.body)
			User.findOne({email: request.body.email, password:request.body.password}, function(err, record){
				if(record){
					// response.render('dashboard.ejs') // Without Templating Engine
					// response.render('dashboard.ejs')
					console.log("SUCCESSFUL LOGIN")
					response.redirect('/dashboard')
				}
				else{
					console.log("FAILED LOGIN")
					response.redirect('/dashboard')
				}
					// response.json({
						// response.
						// page: sampleHTML
						// status:'failed',
						// attempt: 1
					// })
			})
			// newUser.save(function(err, user){
			// 	if(err)
			// 		response.json(err)
			// 	else
			// 		response.json(user)
			// })
		},
		edit: function(request, response){
			console.log("Server / Ctrl / Sessions - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / Sessions - Update")
		},
		show: function(request, response){
			console.log("Server / Ctrl / Sessions - Show")
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Sessions - Destroy")

		},

	
	}

})();