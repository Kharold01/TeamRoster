


// Katie Harold
// Feb 27, 2015
// Filtering the roster



datafile = require('./roster.js');
var roster = JSON.parse(datafile);


function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

console.log(filter(roster, function(person) {
	return person.gender = "f";
	}));
