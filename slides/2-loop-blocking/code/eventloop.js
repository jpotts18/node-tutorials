// Log the message
console.log('Hello World');

// 2 Demonstration of synchronous
console.log('Hello');
console.log('World');

// 3 Simulating a long running function
console.log('Hello');

setTimeout(function () {
	console.log('Node');
}, 2000);

setTimeout(function(){
	console.log('World');
}, 2000);

// 4 Switch timeout length which will happen first?