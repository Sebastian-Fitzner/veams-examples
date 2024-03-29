module.exports = {
	livereload: {
		options: {
			livereload: true
		},
		files: [
			'<%= paths.dev %>/{,*/}*.html',
			'<%= paths.dev %>/css/{,*/}*.css',
			'<%= paths.dev %>/js/{,*/}*.js',
			'<%= paths.dev %>/img/**/*.{jpg,png}'
		]
	},
	express: {
		files: [
			'./server/**/*.js'
		],
		tasks: ['express:dev'],
		options: {
			spawn: false
		}
	},
	ajax: {
		files: '<%= paths.src %>/ajax/**/*.{json,html}',
		tasks: 'sync:ajax'
	},
	assets: {
		files: [
			'<%= paths.src %>/assets/**/*'
			],
		tasks: 'sync:assets'
	},
	scss: {
		files: '<%= paths.src %>/scss/**/*',
		tasks: [
			'sass:dev',
			'postcss:dev'
		],
	    options: {
			spawn: false
		}
	},
	universal: {
		files: '<%= paths.src %>/scss/universal.scss',
		tasks: 'sass:universal'
	},
	templating: {
		files: ['<%= paths.src %>/{templating/data,templating/layouts,templating/partials}/**/{,*/}*.{md,hbs,json}'],
	    tasks: ['newer:assemble'],
	    options: {
			spawn: false
		}
	},
	pages: {
		files: ['<%= paths.src %>/templating/pages/**/{,*/}*.hbs'],
		tasks: ['newer:assemble:pages'],
		options: {
			spawn: false
		}
	}
};