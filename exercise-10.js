function changeMe(array) {
	if (array.length === 0) {
		console.log('');
	}
	else {
		for (let i = 0; i < array.length; i++) {
			var people = {
				firstName : array[i][0],
				lastName  : array[i][1],
				gender    : array[i][2],
				age       : array[i][3] === undefined ? 'Invalid Birth Year' : 2019 - array[i][3]
			};
			console.log(i + 1 + ' ' + people.firstName + ' ' + people.lastName + ':');
			console.log(people);
		}
	}
}

// TEST CASES
changeMe([ [ 'Christ', 'Evans', 'Male', 1982 ], [ 'Robert', 'Downey', 'Male' ] ]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
