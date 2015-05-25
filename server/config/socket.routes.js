module.exports = function(app) {

	io.sockets.on('connection', function(socket) { // on connection

		socket.on('event_name', function(user){
		
		})
		// (Action) Emit to Client - Response to Client who emitted 'button_clicked'
		// socket.emit('server_response', {response: "Working"}); 
	    
	    // (Action) Broadcast to all except Client (who emitted 'button_clicked')
		// socket.broadcast.emit('server_response', {response: "Working"}); 
	    
	    // (Action) Broadcast to all including Client (who emitted 'button_clicked') 
		// io.emit('server_response', {response: "Working"});
		socket.on('disconnect', function() { 
			
		})


	})

}
