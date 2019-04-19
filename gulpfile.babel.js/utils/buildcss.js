import { src, dest } from 'gulp';
import size from 'gulp-size';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import rename from 'gulp-rename';
import { server } from './livereload';
import { config } from '../config';

/* Build flexboxgrid +debug */
const buildFlexboxgrid = () => src(config.css.src.flexboxgrid, { sourcemaps: true })
	.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
	.pipe(
		postcss([
			autoprefixer({ browsers: ['last 1 version', 'not dead', '> 0.2%'] }),
		]),
	)
	.pipe(size({ showFiles: true }))
	.pipe(dest(config.css.dest, { sourcemaps: true }))
	.pipe(server.stream());

/* Build minified flexboxgrid +debug */
const buildFlexboxgridMin = () => src(config.css.src.flexboxgrid)
	.pipe(sass({ outputStyle: 'compressed' }))
	.pipe(
		postcss([
			autoprefixer({ browsers: ['last 1 version', 'not dead', '> 0.2%'] }),
		]),
	)
	.pipe(postcss([cssnano()]))
	.pipe(rename({ suffix: '.min' }))
	.pipe(size({ showFiles: true, gzip: true }))
	.pipe(dest(config.css.dest));

/* Build index view */
const buildIndex = () => src(config.css.src.index, { sourcemaps: true })
	.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
	.pipe(
		postcss([
			autoprefixer({ browsers: ['last 1 version', 'not dead', '> 0.2%'] }),
		]),
	)
	.pipe(size({ showFiles: true }))
	.pipe(dest(config.css.dest, { sourcemaps: true }))
	.pipe(server.stream());

export { buildFlexboxgrid, buildFlexboxgridMin, buildIndex };
