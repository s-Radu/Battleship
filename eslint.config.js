const prettierPlugin = require('eslint-plugin-prettier');

module.exports = {
	ignores: ['dist/*'],
	languageOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		globals: {
			window: 'readonly',
			document: 'readonly',
			process: 'readonly',
			module: 'readonly',
			require: 'readonly',
			__dirname: 'readonly',
			__filename: 'readonly',
			exports: 'writable',
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				bracketSameLine: true,
			},
		],
		'no-unused-vars': 'error',
	},
	plugins: {
		prettier: prettierPlugin,
	},
};
