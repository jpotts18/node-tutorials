// Log the message
// console.log('Hello World');

// 2 Demonstration of synchronous
// console.log('Hello');
// console.log('World');

// 3 Simulating a long running function
// console.log('Hello');

// setTimeout(function () {
// 	console.log('Node');
// }, 1000);

// setTimeout(function(){
// 	console.log('World');
// }, 2000);

// 4 Switch timeout length

// (function(){
// 	var start = Date.now();
// 	console.log('Hello ' + (Date.now() - start));
// 	(function(){
// 		console.log('Node ' + (Date.now() - start));
// 		(function () {
// 			console.log('World ' + (Date.now() - start));
// 		})();
// 	})();
// })();