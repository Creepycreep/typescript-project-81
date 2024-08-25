import Tag from '../Tag/Tag';

export default class Form {
	private template: Record<string, string | number>;
	private props?: Record<string, string>;
	private inputs: string[] = [];

	constructor(template: Record<string, string | number>, props?: Record<string, string>) {
		this.template = template;
		this.props = props;
	}

	toString() {
		return new Tag(
			'form',
			{
				action: this.props && this.props.url ? this.props.url : '#',
				method: this.props && this.props.method ? this.props.method : 'post',
			},
			this.inputs.join(''),
		).toString();
	}

	input(value: string, attrs?: Record<string, string | number>) {
		if (!Object.hasOwn(this.template, value)) {
			throw new Error(`Error: Field '${value}' does not exist in the template.`);
		}

		if (attrs && attrs.as === 'textarea') {
			this.inputs.push(
				new Tag(
					'textarea',
					{
						cols: '20',
						rows: '40',
						...attrs,
						name: value,
					},
					this.template[value],
				).toString(),
			);

			return;
		}

		this.inputs.push(
			new Tag('input', {
				type: 'text',
				value: this.template[value],
				...attrs,
				name: value,
			}).toString(),
		);
	}
}
