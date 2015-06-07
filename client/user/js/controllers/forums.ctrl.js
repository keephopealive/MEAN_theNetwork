theNetworkInternal.controller('ForumsController', function($scope, $routeParams, forumFactory) {

	$scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.numberOfPages=function(){
	 	return Math.ceil($scope.data.length/$scope.pageSize);                
    }
        console.log("Client / User / forums.ctrl / getGeneralThreads")

	function getGeneralThreads(){
        console.log("1 -  Controller")
		forumFactory.getGeneralThreads(function(posts){
			$scope.posts = posts;
			console.log("4 - Back to Controller", posts)
			// $scope.data = posts;
		})
	}

	getGeneralThreads();



})


theNetworkInternal.filter('startFrom', function() {

    return function(input, start) {
        start = +start; //parse to int
        if(start)
        	return input.slice(start);
        else
        	return input
    }
});