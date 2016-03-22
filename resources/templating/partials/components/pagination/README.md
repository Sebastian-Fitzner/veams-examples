# Pagination

This component is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: pagination, @tag: component-partial }}
{{#with pagination-bp.simple}}
	{{> c-pagination}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import 
@import "components/_c-pagination";
// @INSERT :: END
```
