$(document).ready(function(){

	socket = io.connect()

	socket.on('update_userCount', function(data){
		$("#userCount").html(data.count)
	})

})