
// What is different between these two?

<?php
	print('Hello');

	sleep(5);

	print('World');
?>

// Now in Node.js

var start = Date.now();
console.log('start time: ' + start);

setTimeout(function () {
	console.log('top functions time: ' + (Date.now() - start));
	var x;
	for (var i = 0; i < 1000000000; i++) {
		x = x + i;
	}
}, 1000);

setTimeout(function () {
	console.log('bottom function time : ' + (Date.now() - start));
}, 2000);

// A practical Application

http.createServer(function(req, res) {
	var username = req.body.username;
	database.getUserByUsername(username,function(err, user) {
		if(err) console.log('The database is gone');
		if(user){
			res.writeHead(200);
			res.end(user);
		}
	});
});