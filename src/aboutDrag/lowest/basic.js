function drag() {
	const drag = document.getElementById('drag');

	drag.addEventListener('mousedown', e => {
		let diffX = e.clientX - drag.offsetLeft;
		let diffY = e.clientY - drag.offsetTop;	
		
		function calculateOnMousemove(e) {
			let left = e.clientX - diffX;
			let top = e.clientY - diffY;
	
			// 控制拖拽物体的范围只能在浏览器视窗内，不允许出现滚动条
			if (left < 0) {
				left = 0
			} else if (left > window.innerWidth - drag.offsetWidth) {
				left = window.innerWidth - drag.offsetWidth;
			}
			if (top < 0) {
				top = 0
			} else if (top > window.innerHeight - drag.offsetHeight) {
				top = window.innerHeight - drag.offsetHeight;
			}

			// 移动时重新得到物体的距离，解决拖动时出现晃动的现象
			drag.style.left = left + 'px';
			drag.style.top = top + 'px';
		}
	
		document.documentElement.addEventListener('mousemove', calculateOnMousemove, false);
	
		document.documentElement.addEventListener('mouseup', e => {
			document.documentElement.removeEventListener('mousemove', calculateOnMousemove);

		}, false);
	}, false);
}

drag();
