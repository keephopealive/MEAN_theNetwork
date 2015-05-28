theNetwork.controller('SessionsController', function($scope, $routeParams, SessionFactory) {

	$scope.login = function(user){
		SessionFactory.create(user, function(server_response){
			if(server_response.status)
				$scope.errors = server_response;

			else{
				// $routeProvider.otherwise({redirectTo:'/dashboard'});
				// $location
				// $location.path('/dashboard')
			}
		})
	}


});