import { config } from '../config';
import { watch, series } from 'gulp';
import buildcss from '../tasks/buildcss';
import lintcss from '../tasks/lintcss';

const watcher = () => {
	watch(config.css.watch, series(lintcss, buildcss));
};

export default watcher;
