/*
 * Gulp
 *
 * To list available tasks, try running: gulp --tasks
 */

import { task } from 'gulp';

import lintcss from './tasks/lintcss';
import dev from './tasks/dev';
import prod from './tasks/prod';

export const taskLintcss = task(lintcss);
export const taskDev = task(dev);
export const taskProd = task(prod);

export { default } from './tasks/dev';

// TODO: Pending merge of "Fix Honor displayName in ESM exports":
//      https://github.com/gulpjs/gulp-cli/pull/189
//      export { buildcss };
