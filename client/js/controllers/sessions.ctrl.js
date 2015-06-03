theNetwork.controller('SessionsController', function($scope, $routeParams, $location, SessionFactory) {

	$scope.login = function(user){
		SessionFactory.create(user, function(server_response){
			if (server_response.status){
				$scope.errors = "";
				// SessionFactory.newPage();
				// $location.path('/dashboard')
				console.log("Successful Login, user: ", server_response.user)
			}
			else {
				$scope.errors = server_response.msg;
			}
		})
	}

	$scope.logout = function(user){
		// SessionFactory.destroy(); 
	}





});