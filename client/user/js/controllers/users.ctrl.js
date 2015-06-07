theNetworkInternal.controller('UsersController', function($scope, $routeParams, UserFactory) {

	$scope.register = function(newUser){
		UserFactory.create(newUser, function(server_response){
			if(server_response.errors)
				$scope.errors = server_response.errors
		})
	}


 //  	function retrieveUsers(){
	//   	UserFactory.retrieve(function(data) {
	// 		$scope.users = data;
	// 	});
	// }
	
	// console.log("client/controllers/user_controller.js - retrieveUsers");
	// retrieveUsers();


	// var defaultNewUserForm = function(){
	// 	$scope.new_user = {};
	// 	$scope.new_user.name = '';
	// }
	// console.log("client/controllers/user_controller.js - defaultNewUserForm");
	// defaultNewUserForm();

	// $scope.createUser = function() {
	// 	console.log("client/controllers/user_controller.js - createUser");
	// 	UserFactory.create($scope.new_user, function() {
	// 		retrieveUsers();    
	// 		defaultNewUserForm();
	// 	});
	// }

	// $scope.destroyUser = function(user) {
	// 	console.log("client/controllers/user_controller.js - destroyUser");
	// 	UserFactory.destroy(user, function() {
	// 		retrieveUsers();
	// 	})
	// }

	// $scope.updateUser = function(user) {
	// 	console.log("client/controllers/user_controller.js - updateUser");
	// 	UserFactory.update(user, function(response) {
	// 		console.log("response from update function: ", response);
	// 		UserFactory.show($routeParams.id, function(data){
	// 			$scope.one_user = data;
	// 		})
	// 	})
	// }

	// console.log("client/controllers/user_controller.js - show");
	// UserFactory.show($routeParams.id, function(data){
	// 	$scope.one_user = data;
	// });


})