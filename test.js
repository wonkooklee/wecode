const getEvenNumbers = (init, max) => {
	const result = [];
	for(let i=init%2 ? init+1 : init; i <= max; i+=2) {
		result.push(i);
	};
	return result;
};

getEvenNumbers(1, 50)
// Expected result: [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50 ]
