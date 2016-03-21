# Rich Text Editor

This component is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
// @INSERT :: START @id: rte, @tag: component-partial }}
{{#with rte-bp.single}}
	{{> c-rte}}
{{/with}}

{{#with rte-bp.full}}
		{{> c-rte}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import 
@import "components/_c-rte";
// @INSERT :: END
```
