$(document).ready(function(){

	var socket = io.connect()

	socket.on('update_userCount', function(data){
		$("#userCount").html(data.count)
	})


})