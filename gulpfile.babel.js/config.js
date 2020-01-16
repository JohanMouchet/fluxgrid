const dir = {
  src: "assets/src/",
  dist: "assets/dist/"
};

const config = {
  html: {
    src: "*.html"
  },
  css: {
    src: {
      flexgrid: `${dir.src}scss/flexgrid/flexgrid.scss`,
      debug: `${dir.src}scss/flexgrid/flexgrid-debug.scss`,
      demo: `${dir.src}scss/demo.scss`,
      base: `${dir.src}scss/`
    },
    watch: `${dir.src}scss/**/*.scss`,
    lint: `${dir.src}scss/**/*.scss`,
    dest: `${dir.dist}css/`
  }
};

export { dir, config };
