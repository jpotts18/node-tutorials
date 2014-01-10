// How to avoid callback Hell

// Callback Hell looks like this '>'

setTimeout(function(){
	console.log("Hello");
	setTimeout(function () {
		console.log('Node');
		setTimeout(function(){
			console.log('World');
		}, 1000);
	}, 1000);
}, 1000);

// real world problems

authenticate = function (req, res){
	var username = req.body.username;
	var password = req.body.password;
	User.find(username, function (err, user) {
		if(err) console.log('DB barfed...');
		if(user){
			if(user.validatePassword(req.body.password)){
				user.updateLoginTime(function(err,us){
					us.findApiKey(function(err, u){
						res.send()
					})
					res.send(u);
				});
			} else {
				console.log('Wrong Password')
			}
		} else {
			console.log('Wrong Username');
		}
	});
};

// functions 
// validateUser
// updateLoginTime
// findApiKey


// 5 Stopping Callback Hell
// Use async - https://github.com/caolan/async

// async = require('async');

// // if you just need it in a order
// async.series([
//   function(){ console.log('Hello'); },
//   function(){ console.dir('World'); }
//   ]);
 
// // if you need the result to be passed 
// async.waterfall();

// async.waterfall([
//   function(callback){
//    callback(null, ‘one’, ‘two’);
//   },
//   function(arg1, arg2, callback){
//    callback(null, ‘three’);
//   },
//   function(arg1, callback){
//  // arg1 now equals ‘three’
//  callback(null, ‘done’);
//  }
//  ], function (err, result) {
//  // result now equals ‘done’ 
// });

// Q = require('q');

// // Use Q - https://github.com/kriskowal/q

// Q.fcall(checkIfNameExists)
//  .then(checkIfPasswordIsGood)
//  .then(createAccount)
//  .then(createBlog)
//  .then(function (result) {
//  // Do something with the result
// })
//  .catch(function (error) {
//  // Handle any error from all above steps
// })
//  .done();

// 6 