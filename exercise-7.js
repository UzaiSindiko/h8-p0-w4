function urutkanAbjad(str) {
	var holder = [];
	var swapped = true;
	var result = '';
	// masukkan ke array agar bisa di sort
	for (var i = 0; i < str.length; i++) {
		holder.push(str[i]);
	}
	// sorting
	while (swapped) {
		swapped = false;
		for (var j = 0; j < holder.length; j++) {
			var temp = '';
			if (holder[j] > holder[j + 1]) {
				temp = holder[j];
				holder[j] = holder[j + 1];
				holder[j + 1] = temp;
				swapped = true;
			}
		}
	}

	// mengembalikan array menjadi string
	for (var k = 0; k < holder.length; k++) {
		result += holder[k];
	}
	// meng-return hasil akhir
	return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
