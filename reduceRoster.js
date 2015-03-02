


//Katie Harold
//March 2, 2015
//Reducing to find shortest person



datafile = require('./roster.js');
var roster = JSON.parse(datafile);

function reduce(array, combine, start) {
	var current = start;
	for (var i = 0; i < array.length; i++)
		current = combine(current, array[i]);
	return current;
}

console.log(roster.reduce(function(min, cur) {
	if (cur.heightIn < min.heightIn) return cur;
	else return min;
}));


