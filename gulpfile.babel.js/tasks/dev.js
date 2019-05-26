import { series } from 'gulp';
import { livereload } from '../utils/livereload';
import watcher from '../utils/watcher';
import buildcss from '../utils/buildcss';

const dev = done => series(buildcss('dev'), livereload, watcher)(done);

dev.displayName = 'dev';
dev.description =	'Build flexboxgrid, debug and demo CSS, start a browserSync server and watcher';
dev.flags = { '--split': 'Split flexboxgrid into individual breakpoints' };

export default dev;
