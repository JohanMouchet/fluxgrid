import { watch, series, parallel } from 'gulp';
import { config } from '../config';
import { buildFlexboxgrid, buildFlexboxgridMin, buildIndex } from './buildcss';
import lintcss from '../tasks/lintcss';

const watcher = () => {
	watch(
		config.css.watch.flexboxgrid,
		series(lintcss, parallel(buildFlexboxgrid, buildFlexboxgridMin)),
	);
	watch(config.css.watch.index, series(lintcss, buildIndex));
};

export default watcher;
