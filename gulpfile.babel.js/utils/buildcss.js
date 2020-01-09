import { src, dest } from "gulp";
import noop from "gulp-noop";
import size from "gulp-size";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import rename from "gulp-rename";
import { server } from "./livereload";
import { SPLIT, DEBUG } from "./flag";
import { config } from "../config";

/* Build Css */
const buildcss = env => () => {
  const {
    dist = env === "dist",
    prod = env === "prod",
    dev = env === "dev"
  } = env;

  const source = [];

  if (dist) {
    source.push(
      config.css.src.fluxgrid,
      config.css.src.debug,
      config.css.src.split,
      config.css.src.demo
    );
  } else if (prod) {
    source.push(
      SPLIT ? config.css.src.split : config.css.src.fluxgrid,
      ...(DEBUG ? [config.css.src.debug] : [])
    );
  } else {
    // 'dev'
    source.push(
      SPLIT ? config.css.src.split : config.css.src.fluxgrid,
      config.css.src.debug,
      config.css.src.demo
    );
  }

  return src(source, {
    base: config.css.src.base,
    sourcemaps: dev
  })
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      postcss([
        autoprefixer({ browsers: ["last 1 version", "not dead", "> 0.2%"] })
      ])
    )
    .pipe(postcss([cssnano()]))
    .pipe(rename({ suffix: ".min" }))
    .pipe(size({ showFiles: true, gzip: true }))
    .pipe(dest(config.css.dest, { sourcemaps: dev }))
    .pipe(dev ? server.stream() : noop());
};

export default buildcss;
