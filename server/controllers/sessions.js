var User = mongoose.model('User');

module.exports = (function() {

	return {
		index: function(request, response){
			console.log("Server / Ctrl / Sessions - Index")
		},
		new: function(request, response){
			console.log("Server / Ctrl / Sessions - New")
		},
		authenticate: function(request, response){
			User.findOne({email: request.body.email, password:request.body.password}, function(err, record){
				if(record){
					console.log("SUCCESS", record)
					response.json({
						action: 'login',
						status: true,
						auth_token: 'value', // unique key
						uid: record._id
					})
				}
				else{
					console.log("FAILED")
					response.json({
						action: 'login',
						status: false,
						attempt: 1,
						errors: err
					})
				}
					
			})
		},
		create: function(request, response){
			console.log("Server / Ctrl / Sessions - Create, request", request.body)
			User.findOne({_id: request.body.uid}, function(err, record){
				console.log(err)
				console.log(record)
				if(record){
					console.log("SUCCESS 2")
					response.render('dashboard')
					// response.json({
					// 	action: 'login',
					// 	status: true,
					// 	user: record // unique key
					// })
				}
				else{
					console.log("FAILED 2")
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