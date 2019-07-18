function cariModus(arr) {
	var leng = arr.length;
	var showTime = [];
	var max = 0;
	var modus = 0;
	for (var i = 0; i < leng; i++) {
		var show = 0;
		for (var j = 0; j < leng; j++) {
			if (arr[i] === arr[j]) {
				show++;
			}
		}
		showTime.push(show);
	}
	for (var k = 0; k < leng; k++) {
		if (showTime[k] > max) {
			max = showTime[k];
			modus = k;
		}
	}
	if (max === 1 || max === arr.length) {
		return -1;
	}
	else {
		return arr[modus];
	}
}

// TEST CASES
console.log(cariModus([ 10, 4, 5, 2, 4 ])); // 4
console.log(cariModus([ 5, 10, 10, 6, 5 ])); // 5
console.log(cariModus([ 10, 3, 1, 2, 5 ])); // -1
console.log(cariModus([ 1, 2, 3, 3, 4, 5 ])); // 3
console.log(cariModus([ 7, 7, 7, 7, 7 ])); // -1
