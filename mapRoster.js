
// Katie Harold
// Feb 27, 2015
// Mapping the roster file


//load dataset 
datafile = require('./roster.js');
var roster = JSON.parse(datafile);



function map(array, transform) {
	var mapped = [];
	for (var i = 0; i < array.length; i++)
		mapped.push(transform(array[i]));
	return mapped;
}

var sixFeet = rosterFile.filter(function(person) {
	return person.heightIn > 72;
});

console.log(map(sixFeet, function(person) {
	return person.heightIn > 72;
}));


