export default class Tag {
	private unpairedTags: string[] = [
		'area',
		'base',
		'br',
		'col',
		'embed',
		'hr',
		'img',
		'input',
		'link',
		'meta',
		'source',
		'track',
		'wbr',
	];

	private isUnpaired: boolean;
	private name: string;
	private attributes?: string;
	private content?: string;

	constructor(name: string, attributes?: Record<string, string>, content?: string) {
		this.name = name;
		this.content = content ?? '';
		this.isUnpaired = this.unpairedTags.includes(name);
		this.attributes = Object.entries(attributes ?? {})
			.map(([key, value]) => `${key}="${value}"`)
			.join(' ');
	}

	toString() {
		return this.isUnpaired
			? `<${this.name} ${this.attributes}>`
			: `<${this.name} ${this.attributes}>${this.content}</${this.name}>`;
	}
}
