function naikAngkot(arrPenumpang) {
	var result = [];
	// menampilkan index kota asal dan tujuan
	var distence = [];
	var rute = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
	for (let i = 0; i < arrPenumpang.length; i++) {
		var temp = [];
		for (let j = 0; j < rute.length; j++) {
			if (arrPenumpang[i][1] === rute[j] || arrPenumpang[i][2] === rute[j]) {
				temp.push(j);
			}
		}
		distence.push(temp);
	}

	// menghitung biaya angkot
	var cost = [];
	for (let k = 0; k < distence.length; k++) {
		var price = 2000;
		price *= distence[k][0] - distence[k][1];
		// jika penumpang pergi dari kota dengan index lebih besar ke yg lebih kecil
		if (price < 0) {
			price *= -1;
		}
		cost.push(price);
	}

	// menyiapkan dat objek yang akan ditampilkan
	for (let l = 0; l < arrPenumpang.length; l++) {
		var data = {
			penumpang : arrPenumpang[l][0],
			naikDimri : arrPenumpang[l][1],
			tujuan    : arrPenumpang[l][2],
			bayar     : cost[l]
		};
		result.push(data);
	}

	return result;
}

//TEST CASE
console.log(naikAngkot([ [ 'Dimitri', 'B', 'F' ], [ 'Icha', 'A', 'B' ] ]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]
