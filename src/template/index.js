function renderTemplate(template, data) {
	const reg = /\{\{(\w+)\}\}/;

	if (reg.test(template)) {
		const name = reg.exec(template)[1];
		template = template.replace(reg, data[name]);
		return renderTemplate(template, data);
	}

	return template;
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
    name: 'maidang',
    age: 16,
		sex: 'male'
}
renderTemplate(template, person);
