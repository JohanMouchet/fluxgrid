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
			index: `${dir.src}scss/index.scss`,
		},
		watch: {
			flexboxgrid: `${dir.src}scss/flexboxgrid/*.scss`,
			index: `${dir.src}scss/index.scss`,
		},
		lint: `${dir.src}scss/**/*.scss`,
		dest: `${dir.dist}css/`,
	},
};

export { dir, config };
