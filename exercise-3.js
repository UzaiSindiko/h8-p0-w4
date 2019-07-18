function cariMedian(arr) {
	var result = 0;
	var mid = 0;

	if (arr.length % 2 === 0) {
		mid = arr.length / 2;
		result = (arr[mid - 1] + arr[mid]) / 2;
	}
	else {
		mid = Math.ceil(arr.length / 2);
		result = arr[mid - 1];
	}
	return result;
}

// TEST CASES
console.log(cariMedian([ 1, 2, 3, 4, 5 ])); // 3
console.log(cariMedian([ 1, 3, 4, 10, 12, 13 ])); // 7
console.log(cariMedian([ 3, 4, 7, 6, 10 ])); // 7
console.log(cariMedian([ 1, 3, 3 ])); // 3
console.log(cariMedian([ 7, 7, 8, 8 ])); // 7.5
