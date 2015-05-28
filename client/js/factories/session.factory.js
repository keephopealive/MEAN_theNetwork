theNetwork.factory('SessionFactory', function($http) {

	var factory = {};

	factory.create = function(user, callback){
		$http.post('/sessions', user).success(function(server_response){
			callback(server_response)
		})
	}

	return factory;
});