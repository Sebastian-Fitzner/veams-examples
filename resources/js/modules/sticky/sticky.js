/**
 * @module sticky
 *
 * @author Sebastian Fitzner
 */

import Helpers from '../../utils/helpers';
import App from '../../app';
import AppModule from '../_global/module';
let $ = App.$;


class Sticky extends AppModule {
	constructor(obj) {
		var options = {
			stickyClass: 'is-sticky',
			fixedClass: 'is-fixed',
			multipleSticky: false,
			setWidth: true,
			offset: false
		};

		super(obj, options);
	}

	initialize() {
		console.log('init: ');
		this.height = this._getHeight(this.$el);
		this.width = this._getWidth(this.$el);
		this.top = this._getTopPosition(this.$el);

		this._addCustomDiv();

		if (this.options.setWidth) {
			this._setWidth();
		}

		if (this.options.multipleSticky) {
			this.options.multipleSticky = this._getStickysHeight();
		}

		super.initialize();
	}

	render() {
	}


	_getHeight(el) {
		var height = el.outerHeight();
		el.attr('data-js-height', height);
		return height;
	}

	_setHeight(height) {
		this.$el.prev().css('height', height);
	}

	_getWidth(el) {
		var width = el.width();
		el.attr('data-js-width', width);
		return width;
	}

	_setWidth() {
		this.$el.removeAttr('style');
		this.$el.css('width', this.width);
	}

	_getTopPosition(el) {
		return el.offset().top;
	}

	_addCustomDiv() {
		this.$el.before('<div class="is-clone" style="height: 0"/>');
	}

	bindEvents() {
		var _this = this;

		$(window).scroll(function () {
			_this._stickIt();
		});

		if (this.options.setWidth) {
			App.Vent.on('resize', setTimeout(function () {
				_this._setWidth();
			}, 300));
		}
	}

	_getStickysHeight() {
		var height = 0;
		$('[data-js-module="sticky"]').each(function () {
			height += $(this).outerHeight();
		});
		return height;
	}

	_stickIt() {
		var windowTop = $(window).scrollTop();
		var offset = this.options.offset ? this.top + this.height : this.top;

		if (windowTop > offset) {
			if (this.options.multipleSticky) {
				this.options.multipleSticky = this._getStickysHeight();
			}
			this._setHeight(this.height);
			this._addActive();
		} else {
			this._setHeight('0');
			this._removeActive();
		}

	}

	_addActive() {
		this.$el.addClass(this.options.stickyClass);

		if (this.options.multipleSticky) this.$el.css({
			top: this.options.multipleSticky - this.height
		});
	}

	_removeActive() {
		this.$el.removeClass(this.options.stickyClass);
	}

	_addFixed() {
		this._setHeight(this.height);
		this.$el.addClass(this.options.fixedClass).css('width', '100%');
	}

	_removeFixed() {
		this._setHeight('0');
		this.$el.removeClass(this.options.fixedClass);

		if (this.options.setWidth) {
			this._setWidth();
		}
	}
}

// Returns the constructor
export default Sticky;