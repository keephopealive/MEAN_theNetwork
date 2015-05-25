theNetwork.factory('masterFactory', function($http) {

	var factory = {};
	var users = [];

	// factory.update = function(user, callback) {
	// 	console.log("client/factories/user_factory.js - update \n");
	// 	console.log(user);
	// 	$http.post('/update', user).success(function(response){
	// 		callback(response);
	// 	}).error(function(response){
	// 		callback(response);
	// 	});
	// }

	return factory;

});