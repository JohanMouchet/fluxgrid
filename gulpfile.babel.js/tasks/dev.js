import { series } from 'gulp';
import { livereload } from '../utils/livereload';
import watcher from '../utils/watcher';
import buildcss from './buildcss';

const dev = done => series(buildcss, livereload, watcher)(done);

dev.displayName = 'dev';
dev.description = 'Build CSS, start a browserSync server and watcher';

export default dev;
