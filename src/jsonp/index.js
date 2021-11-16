function jsonp(url, callback, success, error) {
	const script = document.createElement('script');
	script.src = url;
	script.async = true;
	script.type = 'text/javascript';
	window[callback] = function(data) {
		try {
			success && success(data);
		} catch (e) {
			error && error(e);
		}
	}
}

jsonp('http://xxx', 'callback', function(val) {
	console.log('val', val);
})
