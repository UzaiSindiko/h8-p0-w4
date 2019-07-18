// // Dengan Built-in Fuction

// function ubahHuruf(kata) {
// 	var result = '';
// 	var code = 0;
// 	for (var i = 0; i < kata.length; i++) {
// 		code = kata.charCodeAt(i);
// 		var temp = String.fromCharCode(code + 1);
// 		if (temp === '{') {
// 			temp = 'a';
// 		}
// 		result += temp;
// 	}
// 	return result;
// }

// Tanpa Built-in Fuction
function ubahHuruf(kata) {
	var alfabet = 'abcdefghijklmnopqrstuvwxyza';
	var result = '';
	for (var i = 0; i < kata.length; i++) {
		for (var j = 0; j < alfabet.length; j++) {
			if (kata[i] === alfabet[j]) {
				result += alfabet[j + 1];
				break;
			}
		}
	}
	return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
