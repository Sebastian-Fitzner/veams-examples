# Quote

This component is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: quote, @tag: component-partial }}
{{#with quote-bp.simple}}
	{{> c-quote }}
{{/with}}

{{#with quote-bp.full}}
	{{> c-quote }}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import 
@import "components/_c-quote";
// @INSERT :: END
```
