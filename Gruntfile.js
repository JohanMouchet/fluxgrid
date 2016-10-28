module.exports = function(grunt) {

	/* Tasks loading */
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({});

	/* Tasks config */
	grunt.initConfig({
	 	// grunt-contrib-watch
	 	watch: {
			styles: {
				files: 'assets/src/scss/**/*.scss',
				tasks: [
					'sass',
					'autoprefixer'
				],
				options: {
					spawn: false,
				},
			}
		},

		// grunt-sass
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'assets/dist/css/flexboxgrid.min.css': 'assets/src/scss/flexboxgrid.scss',
					'assets/dist/css/homeview.css': 'assets/src/scss/homeview.scss'
				}
			}
		},

		// grunt-autoprefixer
		autoprefixer: {
			options: {
				browsers: 'last 2 versions'
			},
			dist: {
				files: {
					'assets/dist/css/flexboxgrid.min.css': 'assets/dist/css/flexboxgrid.min.css',
					'assets/dist/css/homeview.css': 'assets/dist/css/homeview.css'
				}
			}
		},

		// grunt-browser-sync
		browserSync: {
			options: {
				watchTask: true,
				server: {
					baseDir: './'
				}
			},
			bsFiles: {
				src : [
					'assets/dist/css/*.css',
					'**/*.html',
				]
			}
		}
	});

	/* Tasks alias */
	grunt.registerTask('default', ['browserSync', 'watch']);
};
