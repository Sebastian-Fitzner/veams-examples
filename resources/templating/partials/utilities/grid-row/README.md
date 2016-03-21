# grid-row

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: grid-row, @tag: global-partial }}
{{#with grid-row-bp}}
	{{#wrapWith "u-grid-row"}}
		Wrapped with markup from grid-row.
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "globals/_u-grid-row";
// @INSERT :: END
```
