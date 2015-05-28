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
			User.findOne({email: request.body.email, password:request.body.password}, function(err, record){
				if(record){
					response.json({
						action: 'login',
						status: true,
						user: record
					})
				}
				else{
					response.json({
						action: 'login',
						status: false,
						attempt: 1,
						errors: err
					})
				}
					
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