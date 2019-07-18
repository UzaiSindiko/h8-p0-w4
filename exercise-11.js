function shoppingTime(memberId, money) {
	if (memberId == false || memberId == null) {
		return '\n Mohon maaf, toko X hanya berlaku untuk member saja';
	}
	else if (money < 50000) {
		return '\n Mohon maaf, uang tidak cukup';
	}

	var items = [ 'Sepatu Stacattu', 'Baju Zoro', 'Baju H&N ', 'Sweater Uniklooh', 'Casing Handphone' ];
	var prices = [ 1500000, 500000, 250000, 175000, 50000 ];
	var change = money;
	var purchased = [];

	for (let i = 0; i < items.length; i++) {
		if (change >= prices[i]) {
			change -= prices[i];
			purchased.push(items[i]);
		}
	}

	var result = {
		memberId      : memberId,
		money         : money,
		listPurchased : purchased,
		changeMoney   : change
	};

	console.log('\n');
	return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
