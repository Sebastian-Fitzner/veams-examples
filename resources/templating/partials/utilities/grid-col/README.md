# grid-col

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: grid-col, @tag: global-partial }}
{{#with grid-col-bp}}
	{{#wrapWith "u-grid-col"}}
		Wrapped with markup from grid-col.
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "globals/_u-grid-col";
// @INSERT :: END
```
