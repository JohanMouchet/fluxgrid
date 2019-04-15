import { series } from 'gulp';
import clean from '../utils/clean';
import { livereload } from '../utils/livereload';
import watcher from '../utils/watcher';
import buildcss from './buildcss';

const dev = done => series(clean, buildcss, livereload, watcher)(done);

dev.displayName = 'dev';
dev.description =
	'Clean destination folder, compile SASS, start a browserSync server and watcher';

export default dev;
