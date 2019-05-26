/*
 * Gulp
 *
 * To list available tasks, try running: gulp --tasks
 */

import lintcss from './tasks/lintcss';
import dev from './tasks/dev';
import dist from './tasks/dist';
import prod from './tasks/prod';

export { lintcss };
export { dev };
export { dist };
export { prod };

export { default } from './tasks/dev';
