theNetwork.factory('SessionFactory', function($http, $location) {

	var factory = {};

	factory.create = function(user, callback){
		$http.post('/sessions/authenticate', user).success(function(server_response){
			
			window.location.href = '/sessions/authenticated/123abc/'+server_response.uid;
			console.log("in factory ", server_response)

			callback(server_response)


			// if(server_response.status){
				// $.form('/sessions', {'uid':server_response.uid}, 'GET').submit();
				// $.ajax({
				//     url:   "/sessions",
				//     data:  {'uid':server_response.uid},
				//     async: false
				// });

						 // replace with auth token
					    // {'auth_token': server_response.auth_token}
				// document.body.innerHTML += '<form id="dynForm" action="/sessions" method="post"><input type="hidden" name="auth_token" value="abc"></form>';
				// document.getElementById("dynForm").submit();
				// console.log('here')
				// $location.url('/sessions/auth/'+server_response.auth_token);
				 // callback(server_response)
			// }
			// else {
			// }
		})
	}

	return factory;
});