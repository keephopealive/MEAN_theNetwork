theNetworkInternal.factory('forumFactory', function($http) {

	var factory = {};
	var threads = [];

	factory.getGeneralThreads = function(callback) {
		console.log("2 - Factory")
		$http.get('/threads/allthreads.json')
		.success(function(response){
			console.log("3 - Back to Factory")
		
			callback(response);
		})
	}

	factory.getPostnComments = function(post_id, callback) {
		$http.get('/threads/getPostnComments.json/'+post_id)
		.success(function(response){
			console.log("Server Responded ", response)
			callback(response);
		})
	}

	// factory.addComment = function(newComment, callback){
	// 	$http.post('/threads/addComment.json', newComment)
	// 	.success(function(response){
	// 		console.log("back from server - response: ", response)
	// 		callback(response)
	// 	})
	// }

	return factory;

});