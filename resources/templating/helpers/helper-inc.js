(function () {
	module.exports.register = function (Handlebars, options) {

		/*
		 * Increment helper.
		 *
		 * @return a value + 1
		 */
		Handlebars.registerHelper('inc', function (val) {
			var result;
			result = parseInt(val) + 1;
			return result;
		});
	};
}).call(this);