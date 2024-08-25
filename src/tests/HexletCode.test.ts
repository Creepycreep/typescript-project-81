import { assert, describe, expect, test } from 'vitest';
import HexletCode from '../components/HexletCode/HexletCode';
import { formFixtures } from './__fixtures__/formFixtures';

describe('HexletCode', () => {
	const template = { name: 'rob', job: 'hexlet', gender: 'm' };

	test('test 1', () => {
		expect(HexletCode.formFor(template)).toBe(formFixtures.form1);
	});

	test('test 2', () => {
		expect(
			HexletCode.formFor(template, { url: '/users' }, (f) => {
				f.input('name');
				f.input('job', { as: 'textarea' });
				f.submit();
			}),
		).toBe(formFixtures.form2);
	});

	test('test 3', () => {
		expect(
			HexletCode.formFor(template, {}, (f) => {
				f.input('name', { class: 'user-input' });
				f.input('job');
				f.submit('wow');
			}),
		).toBe(formFixtures.form3);
	});

	test('test 4', () => {
		expect(
			HexletCode.formFor(template, { url: '#' }, (f) => f.input('job', { as: 'textarea', rows: 50, cols: 50 })),
		).toBe(formFixtures.form4);
	});

	test('test 5', () => {
		assert.throws(() => {
			HexletCode.formFor(template, { url: '/users' }, (f) => {
				f.input('name');
				f.input('job', { as: 'textarea' });
				f.input('age');
			});
		}, formFixtures.form5);
	});
});
