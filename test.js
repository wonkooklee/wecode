const getEvenNumbers = (nums) => {
	const result = [];
	for(let i=2; i<=50; i+=2) {
		result.push(i);
	};
	return result;
};

getEvenNumbers()
// Expected result: [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50 ]
