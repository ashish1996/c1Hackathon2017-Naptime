module.exports = function(grunt)
{
	//Project config
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	
	connect:
	{
		server:
		{
			options:
			{
				open:
				{
					target: 'localhost',
					appName: 'Google Chrome'
				}
			}
		}
	},
	sass:
	{
			options:
			{
				sourceMap: true
			}, //options

		build:
			{

			files:
			{
				'assets/build/styles/style.css': 'scss/style.scss'
			} //files
			} //build
	}, //sass
// 
	watch:
		 {
			html:
			{
				files: ['*.html']
			},

			css:
			{
				files: ['connect/public/css/testcss/*.scss', 'scss/*.scss', 'node_modules/michelangelo/kss_styleguide/custom-template/kss-assets/css/*.scss'],
				tasks: [ 'sass', 'kss'],
			
			}, //css

			javascript:
			{
				files: ['*.js']
			},
				options:
			{
				livereload: true,
				spawn: false

			}
			
		} //watch
});

grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-open');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['connect', 'watch', 'open' ]);


};