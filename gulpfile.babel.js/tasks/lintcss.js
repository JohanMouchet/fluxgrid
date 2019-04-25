import { src, lastRun } from 'gulp';
import stylelint from 'gulp-stylelint';
import { config } from '../config';

const lintcss = () => src(config.css.lint, { since: lastRun(lintcss) }).pipe(
	stylelint({
		failAfterError: false,
		reporters: [
			{
				formatter: 'string',
				console: true,
			},
		],
	}),
);

lintcss.displayName = 'lint:css';
lintcss.description = 'Lint source CSS';

export default lintcss;
