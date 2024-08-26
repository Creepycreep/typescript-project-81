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
				method: this.props && this.props.method ? this.props.method : 'post',
				action: this.props && this.props.url ? this.props.url : '#',
			},
			this.inputs.join(''),
		).toString();
	}

	input(value: string, attrs?: Record<string, string | number> & { as: string }) {
		if (!Object.hasOwn(this.template, value)) {
			throw new Error(`Error: Field '${value}' does not exist in the template.`);
		}

		if (attrs && attrs.as === 'textarea') {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { as, ...rest } = attrs;
			this.inputs.push(
				this.label(value),
				new Tag(
					'textarea',
					{
						cols: '20',
						rows: '40',
						name: value,
						...rest,
					},
					this.template[value],
				).toString(),
			);

			return;
		}

		this.inputs.push(
			this.label(value),
			new Tag('input', {
				name: value,
				type: 'text',
				value: this.template[value],
				...attrs,
			}).toString(),
		);
	}

	label(value: string) {
		const valFirstLetterUpper = value[0].toUpperCase() + value.slice(1);
		return new Tag(
			'label',
			{
				for: value,
			},
			valFirstLetterUpper,
		).toString();
	}

	submit(value: string = 'Save') {
		this.inputs.push(
			new Tag('input', {
				type: 'submit',
				value: value,
			}).toString(),
		);
	}
}
