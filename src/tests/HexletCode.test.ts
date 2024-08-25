import { assert, describe, expect, test } from 'vitest';
import HexletCode from '../components/HexletCode/HexletCode';

describe('HexletCode', () => {
	const template = { name: 'rob', job: 'hexlet', gender: 'm' };

	test('test 1', () => {
		expect(HexletCode.formFor(template)).toBe('<form action="#" method="post"></form>');
	});

	test('test 2', () => {
		expect(
			HexletCode.formFor(template, { url: '/users' }, (f) => {
				f.input('name');
				f.input('job', { as: 'textarea' });
			}),
		).toBe(
			'<form action="/users" method="post"><input type="text" value="rob" name="name"><textarea cols="20" rows="40" as="textarea" name="job">hexlet</textarea></form>',
		);
	});

	test('test 3', () => {
		expect(
			HexletCode.formFor(template, {}, (f) => {
				f.input('name', { class: 'user-input' });
				f.input('job');
			}),
		).toBe(
			'<form action="#" method="post"><input type="text" value="rob" class="user-input" name="name"><input type="text" value="hexlet" name="job"></form>',
		);
	});

	test('test 4', () => {
		expect(
			HexletCode.formFor(template, { url: '#' }, (f) => f.input('job', { as: 'textarea', rows: 50, cols: 50 })),
		).toBe(
			'<form action="#" method="post"><textarea cols="50" rows="50" as="textarea" name="job">hexlet</textarea></form>',
		);
	});

	test('test 5', () => {
		assert.throws(() => {
			HexletCode.formFor(template, { url: '/users' }, (f) => {
				f.input('name');
				f.input('job', { as: 'textarea' });
				f.input('age');
			});
		}, `Error: Field 'age' does not exist in the template.`);
	});
});
