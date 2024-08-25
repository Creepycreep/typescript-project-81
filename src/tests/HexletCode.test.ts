import { describe, expect, test } from 'vitest';
import HexletCode from '../components/HexletCode/HexletCode';

describe('HexletCode', () => {
	const template = { name: 'rob', job: 'hexlet', gender: 'm' };

	test('test 1', () => {
		expect(HexletCode.formFor(template)).toBe('<form action="#" method="post"></form>');
	});

	test('test 2', () => {
		expect(HexletCode.formFor(template, { url: '/users' })).toBe('<form action="/users" method="post"></form>');
	});

	test('test 3', () => {
		expect(HexletCode.formFor(template, {})).toBe('<form action="#" method="post"></form>');
	});
});
