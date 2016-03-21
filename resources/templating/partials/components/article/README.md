# Artcile

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: article, @tag: component-partial }}
	{{#with article-bp.simple}}
		{{> c-article}}
	{{/with}}

	{{#with article-bp.articleWithImage}}
		{{> c-article}}
	{{/with}}

	{{#with article-bp.multipleContent}}
		{{> c-article}}
	{{/with}}
	
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import 
@import "components/_c-article";
// @INSERT :: END
```
