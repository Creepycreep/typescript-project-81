import Tag from '../Tag/Tag';

export default class Form {
	private static tag: Tag;

	private template: Record<string, string | number>;
	private props?: Record<string, string>;
	private fn?: (f: Form) => void;

	constructor(template: Record<string, string | number>, props?: Record<string, string>, fn?: (f: Form) => void) {
		this.template = template;
		this.props = props;
		this.fn = fn;
	}

	toString() {
		return new Tag('form', {
			...this.props,
			action: this.props ? this.props.url : '#',
			method: this.props ? this.props.method : 'post',
		});
	}
}
