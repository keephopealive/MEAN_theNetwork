theNetwork.controller('ForumsController', function($scope, $routeParams, forumFactory) {

	$scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.numberOfPages=function(){
	 	return Math.ceil($scope.data.length/$scope.pageSize);                
    }

	function getGeneralThreads(){
		forumFactory.getGeneralThreads(function(posts){
			$scope.posts = posts;
			console.log(posts)
			$scope.data = posts;
		})
	}

	getGeneralThreads();



})


theNetwork.filter('startFrom', function() {

    return function(input, start) {
        start = +start; //parse to int
        if(start)
        	return input.slice(start);
        else
        	return input
    }
});