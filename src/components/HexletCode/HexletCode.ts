import Form from '../../modules/Form/Form';

export default class HexletCode {
	static formFor(template: Record<string, string | number>, props?: Record<string, string>, fn?: (f: Form) => void) {
		const form = new Form(template, props);
		if (fn) fn(form);
		return form.toString();
	}
}
