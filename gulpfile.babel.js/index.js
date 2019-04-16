/*
 * Gulp
 *
 * To list available tasks, try running: gulp --tasks
 */

import { task } from 'gulp';

import buildcss from './tasks/buildcss';
import lintcss from './tasks/lintcss';
import dev from './tasks/dev';

export const task_buildcss = task(buildcss);
export const task_lintcss = task(lintcss);
export const task_dev = task(dev);

export { default } from './tasks/dev';

// TODO: Pending merge of "Fix Honor displayName in ESM exports":
//      https://github.com/gulpjs/gulp-cli/pull/189
//      export { buildcss };
