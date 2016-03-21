module.exports = {
	syncing: {
		tasks: [
			'sync'
		],
		options: {
			logConcurrentOutput: true
		}
	},
	hintAndDocs: {
		tasks: [
			'htmlmin'
		],
		options: {
			logConcurrentOutput: true,
			limit: 5
		}
	}
};