module.exports = function(grunt) {

	/* Requirements */

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
					'assets/dist/css/style.css': 'assets/src/scss/main.scss'
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
					'assets/dist/css/style.css': 'assets/dist/css/style.css'
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
