import { expect, test } from 'vitest';
import Tag from '../../modules/Tag/Tag';

test('test 1', () => {
	expect(new Tag('img', { src: 'path/to/image' }).toString()).toBe('<img src="path/to/image">');
});

test('test 2', () => {
	expect(new Tag('input', { type: 'submit', value: 'Save' }).toString()).toBe('<input type="submit" value="Save">');
});

test('test 3', () => {
	expect(new Tag('label', {}, 'Email').toString()).toBe('<label >Email</label>');
});

test('test 4', () => {
	expect(new Tag('div').toString()).toBe('<div ></div>');
});
