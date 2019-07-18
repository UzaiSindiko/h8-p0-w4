function graduates(students) {
	var result = {};
	var classes = [];
	for (let i = 0; i < students.length; i++) {
		var same = false;
		for (let j = 0; j < classes.length; j++) {
			if (classes[j] === students[i].class) {
				same = true;
			}
		}
		if (!same) {
			classes.push(students[i].class);
		}
	}

	for (let k = 0; k < classes.length; k++) {
		var graduated = [];
		for (let l = 0; l < students.length; l++) {
			if (students[l].score > 75 && classes[k] === students[l].class) {
				var data = {
					name  : students[l].name,
					score : students[l].score
				};

				graduated.push(data);
			}
		}
		result[classes[k]] = graduated;
	}
	return result;
}

console.log('\n');
console.log(
	graduates([
		{
			name  : 'Dimitri',
			score : 90,
			class : 'foxes'
		},
		{
			name  : 'Alexei',
			score : 85,
			class : 'wolves'
		},
		{
			name  : 'Sergei',
			score : 74,
			class : 'foxes'
		},
		{
			name  : 'Anastasia',
			score : 78,
			class : 'wolves'
		}
	])
);

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }
console.log('\n');
console.log(
	graduates([
		{
			name  : 'Alexander',
			score : 100,
			class : 'foxes'
		},
		{
			name  : 'Alisa',
			score : 76,
			class : 'wolves'
		},
		{
			name  : 'Vladimir',
			score : 92,
			class : 'foxes'
		},
		{
			name  : 'Albert',
			score : 71,
			class : 'wolves'
		},
		{
			name  : 'Viktor',
			score : 80,
			class : 'tigers'
		}
	])
);

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }
console.log('\n');
console.log(graduates([])); //{}
