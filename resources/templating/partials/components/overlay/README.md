# Overlay

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import 
@import "blocks/_b-overlay";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import 
import Overlay from './modules/overlay/overlay';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-once-v2 
/**
* Init overlay
*/
new Overlay();
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-once-v3 
/**
* Init overlay
*/
new Overlay();
// @INSERT :: END
```
#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events Overlay
 */
EVENTS.overlay = {
	open: 'overlay:open'
};
// @INSERT :: END
```