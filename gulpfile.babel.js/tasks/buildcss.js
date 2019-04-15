import { config } from '../config';
import { PRODUCTION } from '../utils/env';
import { server } from '../utils/livereload';
import { src, dest } from 'gulp';
import noop from 'gulp-noop';
import size from 'gulp-size';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const postcssPlugins = [
	autoprefixer({ browsers: ['last 1 version', 'not dead', '> 0.2%'] }),
	...(PRODUCTION ? [cssnano()] : [])
];

const buildcss = () =>
	src(config.css.src, { sourcemaps: PRODUCTION ? false : true })
		.pipe(
			sass({ outputStyle: PRODUCTION ? 'compressed' : 'expanded' }).on(
				'error',
				sass.logError
			)
		)
		.pipe(postcss(postcssPlugins))
		.pipe(size({ showFiles: true }))
		.pipe(dest(config.css.dest, { sourcemaps: PRODUCTION ? false : true }))
		.pipe(PRODUCTION ? noop() : server.stream());

buildcss.displayName = 'build:css';
buildcss.description = 'Compile SASS, Autoprefix, minify';

export default buildcss;
