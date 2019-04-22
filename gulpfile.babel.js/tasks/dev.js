import { series, parallel } from 'gulp';
import { livereload } from '../utils/livereload';
import watcher from '../utils/watcher';
import {
	buildFlexboxgrid,
	buildFlexboxgridMin,
	buildDemo,
} from '../utils/buildcss';

const dev = done => series(
	buildDemo,
	parallel(buildFlexboxgrid, buildFlexboxgridMin),
	livereload,
	watcher,
)(done);

dev.displayName = 'dev';
dev.description =	'Build flexboxgrid and demo CSS, start a browserSync server and watcher';

export default dev;
