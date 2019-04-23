/*
 * Gulp
 *
 * To list available tasks, try running: gulp --tasks
 */

import lintcss from './tasks/lintcss';
import dev from './tasks/dev';
import prod from './tasks/prod';

export { lintcss };
export { dev };
export { prod };

export { default } from './tasks/dev';
