function tukarBesarKecil(kalimat) {
	var result = '';
	for (let i = 0; i < kalimat.length; i++) {
		var letter = String.fromCharCode(kalimat.charCodeAt(i));

		if (letter == letter.toUpperCase()) {
			letter = letter.toLowerCase();
		}
		else {
			letter = letter.toUpperCase();
		}
		result += letter;
	}

	return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
