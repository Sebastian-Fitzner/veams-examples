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


/**
 * Events Equalizer
 */
EVENTS.equalizer = {
	render: 'equalizer:render'
};

/**
 * Events Accordion
 */
EVENTS.accordion = {
	openAll: 'accordion:openAll',
	closeAll: 'accordion:closeAll'
};

// @INSERTPOINT :: @ref: js-events

export default EVENTS;
