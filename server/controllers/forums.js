var User = mongoose.model('User')

module.exports = (function() {

	return {
		index: function(request, response){
			// var query = "SELECT * FROM forums"
	  //       connection.query(query, function (err, rows) {
		 //        if (err) {
		 //          console.log("Connot execute", err)
		 //        }
		 //        else {

		 //        }
			// })
	    },
	    getGeneral: function(request, response){
	    	var query = "SELECT * FROM threads LEFT JOIN posts ON threads.id = posts.thread_id WHERE threads.title = 'General'";
	    	connection.query(query, function (err, rows){
	    		if (err) {
	    			console.log("Err General request")
	    			response.json(err)
	    		} 
	    		else {
	    			response.json(rows)
	    		}
	    	})
	    }
	}
})()