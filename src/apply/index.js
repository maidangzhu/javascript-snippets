Function.prototype.myApply = function(ctx, ...args) {
	let context = ctx || window;
	const key = Symbol();
	args = args ? args : []
	context[key] = this;

	const res = context[key](args);
	delete context[key];

	return res;
}

let obj = {
	a: 1,
}

function logA(args) {
  console.log(...args);
	console.log(this.a);
}

logA.myApply(obj, [1,2,3]);

