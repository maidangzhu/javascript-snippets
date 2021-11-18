Function.prototype.myBind = function(context, ...fixedArgs) {
	let fn = this;
	let context = context || window;

	let fBound = function() {
		let args = Array.prototype.slice.call(arguments);
		return fn.apply(this instanceof FBound ? this : context, fixedArgs.concat(args));
	}

	return fBound;
}
