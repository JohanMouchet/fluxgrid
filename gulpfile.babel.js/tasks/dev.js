import { series, parallel } from 'gulp';
import { livereload } from '../utils/livereload';
import watcher from '../utils/watcher';
import {
	buildFlexboxgrid,
	buildFlexboxgridMin,
	buildIndex,
} from '../utils/buildcss';

const dev = done => series(
	buildIndex,
	parallel(buildFlexboxgrid, buildFlexboxgridMin),
	livereload,
	watcher,
)(done);

dev.displayName = 'dev';
dev.description =	'Build flexboxgrid and index CSS, start a browserSync server and watcher';

export default dev;
