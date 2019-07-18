function digitPerkalianMinimum(num) {
	var temp = '';
	var minDigit = num * 2;
	for (var i = 0; i <= num; i++) {
		for (var j = 0; j <= num; j++) {
			if (i * j === num) {
				temp = i.toString() + j.toString();
				if (temp.length < minDigit) {
					minDigit = temp.length;
				}
			}
		}
	}
	return minDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
