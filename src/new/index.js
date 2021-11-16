/**
 * 过程
 * 新生成了一个对象
 * 链接到原型
 * 绑定 this
 * 返回新对象
 */
function myNew() {
	const obj = {}; // 字面量对象
	const constructor = [].shift.call(arguments); // 获取第一个参数，即构造函数
	obj.prototype = Object.create(constructor.prototype);
	const res = constructor.apply(obj, arguments);
	// 如果返回值是一个对象，则返回这个对象，否则最开始新生成的obj
	return Object.prototype.isPrototypeOf(res) ? res : obj;
}
