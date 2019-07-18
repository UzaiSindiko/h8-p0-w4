function highestScore(students) {
	//cari ada kelas apa aja
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

	var result = {};
	for (let k = 0; k < classes.length; k++) {
		var highest = 0;
		var studentsName = '';
		for (let l = 0; l < students.length; l++) {
			if (students[l].score > highest && students[l].class === classes[k]) {
				studentsName = students[l].name;
				highest = students[l].score;
			}
		}
		var data = {
			name  : studentsName,
			score : highest
		};
		result[classes[k]] = data;
	}

	return result;
}

// TEST CASE
console.log('\n');
console.log(
	highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
console.log('\n');
console.log(
	highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }
console.log('\n');
console.log(highestScore([])); //{}
