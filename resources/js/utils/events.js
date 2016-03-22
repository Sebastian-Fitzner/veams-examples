/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 */

const EVENTS = {
	btnClose: 'button:close',
	btnOpen: 'button:open',
	DOMchanged: 'DOMchanged',
	DOMredirect: 'dom:redirect',
	mediachange: 'mediachange',
	resize: 'resize',
	scroll: 'scroll'
};

/**
 * Events Overlay
 */
EVENTS.overlay = {
	open: 'overlay:open'
};

// @INSERTPOINT :: @ref: js-events

export default EVENTS;
