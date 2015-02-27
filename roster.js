


// Katie Harold
// Roster Dataset
// Feb. 23, 2015


// All one dataset but starting with the girls info first.
// Using the larder format of the entries...


var rosterFile = "[\n " + [
'{"playerName": "Katie Harold", "gender": "f", "jerseyNumber": 5, "heightIn": 66, "year": "Senior", "position": "G"}', 
'{"playerName": "Brittany Morris", "gender": "f", "jerseyNumber": 3, "heightIn": 64, "year": "Sophomore", "position": "G"}',
'{"playerName": "Kalea Parks", "gender": "f", "jerseyNumber": 11, "heightIn": 72, "year": "R. Sophomore", "position": "F"}',
'{"playerName": "Deja Horn", "gender": "f", "jerseyNumber": 12, "heightIn": 67, "year": "Freshman", "position": "G"}',
'{"playerName": "Tityana Miller", "gender": "f", "jerseyNumber": 15, "heightIn": 72, "year": "Senior", "position": "F"}',
'{"playerName": "Courtney Kvachkoff", "gender": "f", "jerseyNumber": 20, "heightIn": 69, "year": "Junior", "position": "G"}',
'{"playerName": "Bre Michaels", "gender": "f", "jerseyNumber": 21, "heightIn": 68, "year": "Freshman", "position": "G"}',
'{"playerName": "Laura Furrer", "gender": "f", "jerseyNumber": 22, "heightIn": 69, "year": "Junior", "position": "G/F"}',
'{"playerName": "Lauren Davis", "gender": "f", "jerseyNumber": 23, "heightIn": 64, "year": "R. Junior", "position": "G"}',
'{"playerName": "Cameika Gregory", "gender": "f", "jerseyNumber": 24, "heightIn": 66, "year": "Senior", "position": "G"}',
'{"playerName": "Rolanda Curington", "gender": "f", "jerseyNumber": 25, "heightIn": 69, "year": "Freshman", "position": "G/F"}',
'{"playerName": "Dorian Adams", "gender": "f", "jerseyNumber": 32, "heightIn": 69, "year": "Freshman", "position": "G"}',
'{"playerName": "Abbey Titzer", "gender": "f", "jerseyNumber": 34, "heightIn": 73, "year": "Freshman", "position": "F/C"}',

// Now here are the boys..

'{"playerName": "Cameron Vines", "gender": "m", "jerseyNumber": 1, "heightIn": 76, "year": "Senior", "position": "G"}',
'{"playerName": "Davone Daniels", "gender": "m", "jerseyNumber": 2, "heightIn": 74, "year": "Freshman", "position": "G"}',
'{"playerName": "Josh Riley", "gender": "m", "jerseyNumber": 4, "heightIn": 69, "year": "Freshman", "position": "G"}',
'{"playerName": "Jonah Coble", "gender": "m", "jerseyNumber": 11, "heightIn": 74, "year": "Freshman", "position": "G"}',
'{"playerName": "Corey Howard", "gender": "m", "jerseyNumber": 13, "heightIn": 71, "year": "Freshman", "position": "G"}',
'{"playerName": "Jordan Seele", "gender": "m", "jerseyNumber": 14, "heightIn": 81, "year": "Junior", "position": "F"}',
'{"playerName": "David Hill", "gender": "m", "jerseyNumber": 21, "heightIn": 73, "year": "Sophomore", "position": "G"}',
'{"playerName": "Dawson Gore", "gender": "m", "jerseyNumber": 23, "heightIn": 72, "year": "Junior", "position": "G"}',
'{"playerName": "Nathan Tidwell", "gender": "m", "jerseyNumber": 24, "heightIn": 78, "year": "Junior", "position": "F"}',
'{"playerName": "Ryan Rebholz", "gender": "m", "jerseyNumber": 30, "heightIn": 79, "year": "Senior", "position": "F"}',
'{"playerName": "Joe Comerford", "gender": "m", "jerseyNumber": 33, "heightIn": 78, "year": "Sophomore", "position": "F"}',
'{"playerName": "Danilo Zekovic", "gender": "m", "jerseyNumber": 40, "heightIn": 77, "year": "Junior", "position": "G/F"}',
'{"playerName": "Aleksa Kojcinovic", "gender": "m", "jerseyNumber": 45, "heightIn": 80, "year": "R. Junior", "position": "F"}'].join(",\n ") + "\n]";

if (typeof module != "undefined" && module.exports)
	module.exports = rosterFile;



// Because idk how to import...
// mapping this dataset


/*function map(array, transform) {
	var mapped = [];
	for (var i = 0; i < array.length; i++)
		mapped.push(transform(array[i]));
	return mapped;
}

var sixFeet = rosterFile.filter(function(person) {
	return person.heightIn > 72;
});

console.log(map(sixFeet, function(person) {
	return person.name;
}));*/


// trying to filter for females..

/*function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

print(JSON.stringify(filter(rosterFile, function(person) {
	return person.gender = "f";
})));*/







