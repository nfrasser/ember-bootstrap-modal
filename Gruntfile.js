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
			build: {
				files: {
					'build/ember-bs-modal.js': 'js/ember-bs-modal.js'
				}
			},
			dist: {
				files: {
					'dist/ember-bs-modal.js': [
						'build/templates.js',
						'build/ember-bs-modal.js'
					]

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
					'dist/ember-bs-modal.min.js': [
						'build/templates.js',
						'build/ember-bs-modal.js',
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
					var name = sourceFile.replace(/^hbs\//, '');

					// "partials/" -> '_'
					name = name.replace(/^partials\//, '_');

					return name;
				}
			},

			app: {
				files: {
					'build/templates.js': "hbs/**/*.hbs"
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

			templates: {
				files: ['hbs/**/*.hbs'],
				tasks: ['emberTemplates']
			},

			app: {
				files: ['js/**/*.js'],
				tasks: ['neuter']
			}

		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-neuter');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');

	// Build and default tasks. Builds production requirements into the dist folder
	grunt.registerTask('build', ['emberTemplates', 'neuter', 'uglify']);

	/*
		Watch task. Compiles templates/css, neuters application code, and begins
		watching for changes.
	*/
	grunt.registerTask('default', ['emberTemplates', 'neuter:build', 'watch']);
};
