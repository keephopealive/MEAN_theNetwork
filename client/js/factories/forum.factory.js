theNetwork.factory('forumFactory', function($http) {

	var factory = {};
	var threads = [];

	factory.getAllPublicThreads = function(callback) {
		console.log("client/factories/user_factory.js - update \n");
	// 	console.log(user);
		$http.get('/forums')
		.success(function(response){
			callback(response);
		})
		// .error(function(response){
		// 	callback(response);
		// });
	}

	return factory;

});