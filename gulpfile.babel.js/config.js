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
      fluxgrid: `${dir.src}scss/fluxgrid/fluxgrid.scss`,
      debug: `${dir.src}scss/fluxgrid/fluxgrid-debug.scss`,
      demo: `${dir.src}scss/demo.scss`,
      base: `${dir.src}scss/`
    },
    watch: `${dir.src}scss/**/*.scss`,
    lint: `${dir.src}scss/**/*.scss`,
    dest: `${dir.dist}css/`
  }
};

export { dir, config };
