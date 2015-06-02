theNetwork.controller('PostController', function($scope, $routeParams, forumFactory) {

	$scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.numberOfPages=function(){
	 	return Math.ceil($scope.data.length/$scope.pageSize);                
    }

    console.log($routeParams.id)

	function getPostnComments(){
		forumFactory.getPostnComments($routeParams.id, function(content){
			console.log(content)
			$scope.post = content[0][0];
			$scope.comments = content[1];
			$scope.data = content[1];

		})
	}
	getPostnComments();

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