theNetwork.controller('masterCtrl', function($scope, $routeParams, masterFactory) {
	
	var socket = io.connect()

	socket.on('update_userCount', function(data){
		var totalUsers = data.length
		$scope.userCount = totalUsers //data.userCount;
	})


})