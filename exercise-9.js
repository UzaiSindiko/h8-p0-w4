function checkAB(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'a') {
			for (let j = 0; j < str.length; j++) {
				if (str[j] === 'b') {
					if (i - j === 4 || i - j === -4) {
						return true;
					}
				}
			}
		}
	}
	return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
