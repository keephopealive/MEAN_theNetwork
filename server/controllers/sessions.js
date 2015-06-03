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
					console.log("AUTH SUCCESS", record)
					response.json({
						action: 'login',
						status: true,
						auth_token: '123abc', // unique key
						uid: record.id
					})
				}
				else{
					console.log("AUTH FAILED")
					response.json({
						action: 'login',
						status: false,
						attempt: 1,
						msg: 'Invalid Credentials',
						errors: err
					})
				}
					
			})
		},
		create: function(request, response){

			User.findOne({_id: request.params.uid}, function(err, record){
				// Replace record w/ record.auth_token
				if(record && '123abc' == request.params.auth_token && record._id == request.params.uid){
					request.session.auth = '5389uhyjw0ju0589j03h89jw3890'
					console.log(request.session)
					response.redirect('/dashboard')
				}	
			})

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