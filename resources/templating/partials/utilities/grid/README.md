# Grid

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: grid, @tag: utility-partial }}
{{#wrapWith "u-grid-row"}}
    {{#wrapWith "u-grid-col" columns=1 box=true}}
        Col 1
    {{/wrapWith}}
    {{#wrapWith "u-grid-col" columns=11 box=true}}
        Col 11
    {{/wrapWith}}
{{/wrapWith}}

{{#wrapWith "u-grid-row"}}
	{{#wrapWith "u-grid-col" columns=3 box=false}}
		Col 3 with gutter
	{{/wrapWith}}
	{{#wrapWith "u-grid-col" columns=9 box=false}}
		Col 9 with gutter
	{{/wrapWith}}
{{/wrapWith}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "utilities/_u-grid";
// @INSERT :: END
```
