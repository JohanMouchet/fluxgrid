import { series } from 'gulp';
import { livereload } from '../utils/livereload';
import watcher from '../utils/watcher';
import { buildFlexboxgrids, buildIndex } from '../utils/buildcss';

const dev = done => series(buildIndex, buildFlexboxgrids, livereload, watcher)(done);

dev.displayName = 'dev';
dev.description =	'Build flexboxgrid and index CSS, start a browserSync server and watcher';

export default dev;
