theNetwork.factory('SessionFactory', function($http) {

	var factory = {};

	factory.create = function(user, callback){
		$http.post('/sessions/authenticate', user).success(function(server_response){
			console.log(server_response)
			if(server_response.status){
				$.form('/sessions', {'uid':server_response.uid}, 'GET').submit();
				// $.ajax({
				//     url:   "/sessions",
				//     data:  {'uid':server_response.uid},
				//     async: false
				// });

						 // replace with auth token
					    // {'auth_token': server_response.auth_token}
				 
			}
			else {
				callback(server_response)
			}
		})
	}

	return factory;
});