# segment

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: segment, @tag: global-partial }}
{{#with segment-bp}}
	{{#wrapWith "u-segment"}}
		Wrapped with markup from segment.
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "globals/_u-segment";
// @INSERT :: END
```
