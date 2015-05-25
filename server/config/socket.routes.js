module.exports = function(app) {

	var users = [];

	io.sockets.on('connection', function(socket) { // on connection
		
		users.push({socket_id: socket.id})
		io.emit('update_userCount', users)
		
		socket.on('disconnect', function() { 
			for (index in users){
				if (users[index].socket_id == socket.id){
					users.splice(index, 1);
				}
			}
			io.emit('update_userCount', users)
		})

		// socket.on('event_name', function(user){
		
		// })
		// (Action) Emit to Client - Response to Client who emitted 'button_clicked'
		// socket.emit('server_response', {response: "Working"}); 
	    
	    // (Action) Broadcast to all except Client (who emitted 'button_clicked')
		// socket.broadcast.emit('server_response', {response: "Working"}); 
	    
	    // (Action) Broadcast to all including Client (who emitted 'button_clicked') 
		// io.emit('server_response', {response: "Working"});
	})



}
