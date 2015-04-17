var https = require('https');
var fs = require('fs');

var url = "https://api.guildwars2.com/v2/"

var options = {
	host: url,
	port: 80,
	path: 'recipes'
};

https.get(url+"recipes", function(resp) {
	resp.setEncoding('utf8');
	resp.on('data',function(chunk){
		console.log(chunk);
	});
}).on('error', function(e) {
	console.log("Error: " + e.message);
});
