import { src, dest } from "gulp";
import noop from "gulp-noop";
import size from "gulp-size";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import rename from "gulp-rename";
import { server } from "./livereload";
import DEBUG from "./flag";
import { config } from "../config";

/* Build Css */
const buildcss = env => () => {
  const {
    dev = env === "dev",
    dist = env === "dist",
    prod = env === "prod"
  } = env;

  const sources = [config.css.src.fluxgrid];
  const postCssPlugins = [autoprefixer()];

  if (dev) {
    sources.push(config.css.src.debug, config.css.src.demo);
  } else if (dist) {
    sources.push(config.css.src.debug, config.css.src.demo);
    postCssPlugins.push(cssnano());
  } else if (prod) {
    sources.push(...(DEBUG ? [config.css.src.debug] : []));
    postCssPlugins.push(cssnano());
  }

  return src(sources, {
    base: config.css.src.base,
    sourcemaps: dev
  })
    .pipe(
      sass({ outputStyle: dev ? "expanded" : "compressed" }).on(
        "error",
        sass.logError
      )
    )
    .pipe(postcss(postCssPlugins))
    .pipe(rename({ suffix: ".min" }))
    .pipe(size({ showFiles: true, gzip: true }))
    .pipe(dest(config.css.dest, { sourcemaps: dev }))
    .pipe(dev ? server.stream() : noop());
};

export default buildcss;
