import { watch, series } from 'gulp';
import { config } from '../config';
import { buildFlexboxgrids, buildIndex } from './buildcss';
import lintcss from '../tasks/lintcss';

const watcher = () => {
  watch(config.css.watch.flexboxgrid, series(lintcss, buildFlexboxgrids));
  watch(config.css.watch.index, series(lintcss, buildIndex));
};

export default watcher;
