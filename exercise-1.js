function angkaPrima(angka) {
	var k = 0;
	if (angka <= 0) {
		return false;
	}
	for (var i = 2; i < angka; i++) {
		var temp = angka / i;
		if (temp % 1 === 0) {
			return false;
		}
	}
	return true;
	console.log('\n');
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
