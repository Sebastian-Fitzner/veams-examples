module.exports = {
	ajax: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/ajax',
				src: '**/*.{json,html}',
				dest: '<%= paths.dev %>/ajax'
			}
		]
	},
	assets: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/assets',
				src: [
					'**/{,*/}*'
				],
				dest: '<%= paths.dev %>'
			}
		]
	},
	vendorJS: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/js/vendor',
				src: [
					'**/{,*/}*'
				],
				dest: '<%= paths.dev %>/js/vendor'
			}
		]
	}
};