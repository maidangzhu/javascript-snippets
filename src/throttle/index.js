function throttle(fn, delay) {
  let perv;

  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();

    if (now - perv >= delay) {
			perv = now;
      fn.apply(context, args);
		}
  };
}
