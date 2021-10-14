function multiRequest(urls = [], maxNum) {
	const len = urls.length;
	const result = new Array(len).fill(false);
	let count = 0;

	return new Promise((resolve, reject) => {
		while ( count < maxNum ) {
			next();
		}

		function next() {
			let current = count++;
			if (current >= len) {

			}
		}
	})
}
