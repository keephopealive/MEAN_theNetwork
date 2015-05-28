theNetwork.controller('SessionsController', function($scope, $routeParams, $location, SessionFactory) {

	$scope.login = function(user){
		SessionFactory.create(user, function(server_response){
			if (server_response.status){
				$location.path('/dashboard')
				console.log("Successful Login, user: ", server_response.user)
			}
			else {
				$scope.errors = server_response.errors;
			}
		})
	}

	$scope.logout = function(user){
		// SessionFactory.destroy(); 
	}

	



});