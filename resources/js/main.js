// Main Requirements
import App from './app';
import Helpers from './utils/helpers';

// ES6 Modules
import CTA from './modules/cta/cta';
import Slider from './modules/slider/slider';
import Overlay from './modules/overlay/overlay';
import Equalizer from './modules/equalizer/equalizer';
import Sticky from './modules/sticky/sticky';
import Accordion from './modules/accordion/accordion';

// @INSERTPOINT :: @ref: js-import

// Vars
const $ = App.$;

'use strict';

// Main Functionality
class Core {
	constructor() {
		this.initialize();
	}

	/**
	 * Initialize our core functionality
	 * This function will only be executed once.
	 */
	initialize() {
		console.log('App initialized with version: ', App.version);

		/**
		 * Detect Touch
		 */
		if (!App.support.touch) {
			$('html').addClass('no-touch');
		} else {
			$('html').addClass('touch');
		}

		// Redirect
		App.Vent.on(App.EVENTS.DOMredirect, (obj) => {
			if (!obj && !obj.url) throw new Error('Object is not defined. Please provide an url in your object!');

			// Redirect to page
			window.location.href = String(obj.url);
		});


		/**
		 * Init overlay
		 */
		new Overlay();

		// @INSERTPOINT :: @ref: js-init-once-v3

	}

	preRender() {
		Helpers.saveDOM();
	}

	render(context) {

		// I am lazy ...
		$('pre code', context).each(function (i, block) {
			let height = $(this).outerHeight(),
				heightMax = 230;

			hljs.highlightBlock(block);

			if (height > heightMax) {
				$(this).addClass('is-close').attr('data-max-height', height).css('height', heightMax).parent().append('<button class="c-cta--code-toggle" data-js-atom="toggle-code" />');
			}
		});

		$('[data-js-atom="toggle-code"]', context).on('click', function () {
			let el = $(this).prev('code'),
				elData = el.data('max-height');

			if (el.outerHeight() > 230) {
				el.css('height', '230px');
			} else {
				el.css('height', elData + 30);
			}

			$(this).toggleClass('is-active').prev('code').toggleClass('is-close');
		});

		/**
		 * Init Call-To-Action
		 */
		Helpers.loadModule({
			domName: 'cta',
			module: CTA,
			context: context
		});


		/**
		 * Init Form
		 */
		Helpers.loadModule({
			domName: 'slider',
			module: Slider,
			context: context
		});

		/**
		 * Init Sticky
		 */
		Helpers.loadModule({
			domName: 'sticky',
			module: Sticky,
			context: context
		});

		Helpers.loadModule({
			domName: 'equalizer',
			module: Equalizer,
			render: false,
			cb: function (module, options) {
				if (options && options.delayInit) {
					$(window).load(function () {
						module._reinit(module);
					});
				}
			},
			context: context
		});


		/**
		 * Init Accordion
		 */
		Helpers.loadModule({
			domName: 'accordion',
			module: Accordion,
			context: context
		});

		// @INSERTPOINT :: @ref: js-init-v3

	}
}

document.addEventListener("DOMContentLoaded", function () {
	let core = new Core();

	/**
	 * Render modules
	 */
	core.preRender();
	core.render(document);

	/**
	 * Initialize modules which are loaded after initial load
	 * via custom event 'DOMchanged'
	 */
	App.Vent.on(App.EVENTS.DOMchanged, (context) => {
		console.log('Dom has changed. Initialising new modules in: ', context);
		core.preRender();
		core.render(context);
	});
});