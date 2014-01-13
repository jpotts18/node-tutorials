
// Single thread responsibly

<?php 
	$books = array("Lord of Rings","The Hobbit");

	function serveBooks(){
		$html = "<p>" . $books[0] . "</p>";
		$html = "<p>" . $books[1] . "</p>";
		$books = array();
		return $html;
	}
?>

// What happens the first time? 
// What happens the second time? 

// What about in Node.js (single thread)

var books = ['Lord of the Rings','The Hobbit'];

function serveBooks () {
	var html += '<p>' + books[0] + '</p> <p>' + books[1] + '</p>';
	books = [];
	return html;
}

// What happens the first time?
// What happens the second time?

// Take Away:
// Node.js runs on a single thread by default.
// Be careful about the variables you leave in memory.