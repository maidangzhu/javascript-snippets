function cloneDeep(obj) {
	if (typeof obj !== 'object') return;

	const res = obj instanceof Array ? [] : {};

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			res[key] = obj[key];
		}
	}

	return res;
}
