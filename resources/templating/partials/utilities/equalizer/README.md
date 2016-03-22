This utility equals the heights of its child elements.

###  Important Notes

For the implentation you need to make sure that you have the following attributes
 
 1. on the wrapper element:
  * `data-js-module="equalizer"`
 2. on all childs (which should be equalized): 
  * `data-js-atom="equalizer-child"`
 
These attributes can be applied anywhere in your HTML you like. The equalizer should work on every grid element. 

### Modifiers (only necessary when you use the provided markup)

The current state supports a 2-grid-layout or 3-grid-layout. But you can just add another grid version to the sass file. 

 - `is-grid-3` - For 3 columns
 - `is-grid-2`- For 2 columns
