module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: 'airbnb-base',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'max-len': ['warn', { code: 80, ignoreUrls: true }],
		indent: ['error', 'tab'],
		'no-tabs': 0,
	},
};
