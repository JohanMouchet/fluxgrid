import { config } from '../config';
import { server } from '../utils/livereload';
import { src, dest, parallel } from 'gulp';
import size from 'gulp-size';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import rename from 'gulp-rename';

const buildExpandedCss = () =>
	src([config.css.src.homeview, config.css.src.flexboxgrid], {
		sourcemaps: true
	})
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(
			postcss([
				autoprefixer({ browsers: ['last 1 version', 'not dead', '> 0.2%'] })
			])
		)
		.pipe(size({ showFiles: true, showTotal: false }))
		.pipe(dest(config.css.dest, { sourcemaps: true }))
		.pipe(server.stream());

const buildCompressedCss = () =>
	src(config.css.src.flexboxgrid)
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(
			postcss([
				autoprefixer({ browsers: ['last 1 version', 'not dead', '> 0.2%'] })
			])
		)
		.pipe(postcss([cssnano()]))
		.pipe(rename({ suffix: '.min' }))
		.pipe(size({ showFiles: true }))
		.pipe(dest(config.css.dest));

const buildcss = done => parallel(buildExpandedCss, buildCompressedCss)(done);

buildcss.displayName = 'build:css';
buildcss.description = 'Compile SASS, Autoprefix, minify';

export default buildcss;
