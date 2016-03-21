# nav

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: nav, @tag: block-partial }}
{{#with nav-bp}}
	{{> b-nav}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "blocks/_b-nav";
// @INSERT :: END
```
