import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import babelParser from '@babel/eslint-parser';
import prettier from 'eslint-plugin-prettier';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		ignores: ['node_modules/', 'build'],
		languageOptions: { globals: globals.browser, parser: babelParser },
		plugins: {
			prettier,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];
