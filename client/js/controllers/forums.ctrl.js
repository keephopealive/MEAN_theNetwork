theNetwork.controller('ForumsController', function($scope, $routeParams, forumFactory) {

console.log("controller loaded forums")
	var getAllPublicThreads = function(){
		forumFactory.getAllPublicThreads(function(){
			console.log('calledback')
		})
	}

	getAllPublicThreads();



})