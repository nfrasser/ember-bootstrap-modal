module.exports = function (grunt) {

	// http://gruntjs.com/

	"use strict";

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/**
			Each directory in the 3 levels (and all the application
			directories has a js file at its root. This is a node.js file
			that the neuter task reads and uses to generate a compiled
			source file.

			The content of each file in the specified directories will be
			wrapped in a closure and concatenated into the specified file
			inside the root directory

			https://github.com/trek/grunt-neuter

		 */
		neuter: {
			// Neuter options
			options: {
				includeSourceMap: true
			},

			// Neutered Apps
			// Add new apps here as required
			app: {
				files: {
					'build/js/modal-route.js': 'js/modal-route.js'
				}
			}

		},

		/**
			Minify files with UglifyJS
			This task primarily delegates to UglifyJS2, so please consider the
			UglifyJS documentation as required reading for advanced configuration.
			https://npmjs.org/package/grunt-contrib-uglify
		*/
		uglify: {

			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},

			// Dependencies, SoapBox, and Core.
			main: {
				files: {
					'dist/js/modal-route.min.js': [
						'build/js/templates.js',
						'build/js/modal-route.js',
					]
				}
			}
		},

		/*
			Finds Handlebars templates and precompiles them into functions.
			The provides two benefits:

			1. Templates render much faster
			2. We only need to include the handlebars-runtime microlib
				and not the entire Handlebars parser.

			Files will be written out to build/js/...-templates.js
			which is required within the project files so will end up
			as part of our application.

			The compiled result will be stored in
			Ember.TEMPLATES keyed on their file path (with the 'app/templates' stripped)
		*/
		emberTemplates: {
			options: {

				templateName: function (sourceFile) {

					// Example fileName => templateName
					// js/core/templates/selector				=> selector
					// js/soapbox/templates/ideas				=> ideas
					// js/apps/sprints/templates/custom_ideas	=> custom_ideas

					var name = sourceFile.replace(/^hbs\//, '');

					// "partials/" -> '_'
					name = name.replace(/^partials\//, '_');

					return name;
				}
			},

			// Add app-specific templates here
			//	appName: {
			//		files: {
			//			'build/appName-templates.js': 'js/apps/appName/templates/**/*.hbs
			//		}
			//	}
			app: {
				files: {
					'build/js/templates.js': "hbs/**/*.hbs"
				}
			}
		},

		/*
			Watch files for changes.

			Changes in dependencies/ember.js or application javascript
			will trigger the neuter task.

			Changes to any templates will trigger the emberTemplates
			task (which writes a new compiled file into dependencies/)
			and then neuter all the files again.
		*/
		watch: {

			// App-Specific templates
			//	appNameTemplates: {
			//		files: ['js/apps/appName/templates/**/*.hbs],
			//		tasks: ['emberTemplates:appName']
			//	}
			templates: {
				files: ['hbs/**/*.hbs'],
				tasks: ['emberTemplates']
			},

			// Apps
			//	appName: {
			//		files: ['js/apps/appName/**/*.js],
			//		tasks: ['neuter:appName']
			//	}
			app: {
				files: ['js/**/*.js'],
				tasks: ['neuter']
			}

		},

		/*
			Find all the <whatever>_test.js files in the test folder.
			These will get loaded via script tags when the task is run.
			This gets run as part of the larger 'test' task registered
			below.
		*/
		build_test_runner_file: {
			all: ['test/**/*-test.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-neuter');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	//grunt.loadNpmTasks('grunt-closure-compiler');


	// Build and default tasks. Builds production requirements into the dist folder
	grunt.registerTask('build', ['emberTemplates', 'neuter', 'uglify');

	/*
		Watch task. Compiles templates/css, neuters application code, and begins
		watching for changes.
	*/
	grunt.registerTask('default', ['emberTemplates', 'neuter', 'watch']);
};
