import Form from '../../modules/Form/Form';

export default class HexletCode {
	static formFor(template: Record<string, string | number>, props?: Record<string, string>, fn?: (f: Form) => void) {
		return new Form(template, props, fn).toString();
	}
}
