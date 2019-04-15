import { dir, config } from '../config';
import { PRODUCTION } from './env';
import browserSync from 'browser-sync';

const server = PRODUCTION ? null : browserSync.create();

const livereload = done => {
	server.init({
		server: {
			baseDir: './'
		},
		files: [config.html.src, `${dir.dist}**/*`]
	});
	done();
};

export { server, livereload };
