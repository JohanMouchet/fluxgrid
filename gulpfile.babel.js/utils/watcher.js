import { watch, series, parallel } from 'gulp';
import { config } from '../config';
import { buildFlexboxgrid, buildFlexboxgridMin, buildDemo } from './buildcss';
import lintcss from '../tasks/lintcss';

const watcher = () => {
	watch(
		config.css.watch.flexboxgrid,
		series(lintcss, parallel(buildFlexboxgrid, buildFlexboxgridMin)),
	);
	watch(config.css.watch.demo, series(lintcss, buildDemo));
};

export default watcher;
