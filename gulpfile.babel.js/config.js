const dir = {
	src: 'assets/src/',
	dist: 'assets/dist/',
};

const config = {
	html: {
		src: '*.html',
	},
	css: {
		src: {
			flexboxgrid: `${dir.src}scss/flexboxgrid/*.scss`,
			demo: `${dir.src}scss/demo.scss`,
		},
		watch: {
			flexboxgrid: `${dir.src}scss/flexboxgrid/*.scss`,
			demo: `${dir.src}scss/demo.scss`,
		},
		lint: `${dir.src}scss/**/*.scss`,
		dest: `${dir.dist}css/`,
	},
};

export { dir, config };
