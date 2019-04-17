/*
 * Gulp
 *
 * To list available tasks, try running: gulp --tasks
 */

import { task } from 'gulp';

import buildcss from './tasks/buildcss';
import lintcss from './tasks/lintcss';
import dev from './tasks/dev';

export const taskBuildcss = task(buildcss);
export const taskLintcss = task(lintcss);
export const taskDev = task(dev);

export { default } from './tasks/dev';

// TODO: Pending merge of "Fix Honor displayName in ESM exports":
//      https://github.com/gulpjs/gulp-cli/pull/189
//      export { buildcss };
