var User = mongoose.model('User')

module.exports = (function() {

	return {
		index: function(request, response){
			var query = "SELECT * FROM forums"
	        connection.query(query, function (err, rows) {
		        if (err) {
		          console.log("Connot execute", err)
		        }
		        else {

		        }
			})
	    }
	}
})()