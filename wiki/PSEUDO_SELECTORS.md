# CSS - Advanced Selectors

## Lesson Objectives

1. Explain what a pseudo selector is
1. Style link and form elements depending on their "state"
1. Style the first and last elements of a container
1. Style an element depending on what child number it is of its parent
1. Style an element if it is the only child of its parent
1. Negate a selector

## Explain what a pseudo selector is

There are in general two kinds of pseudo selectors

1. Ones that select elements with specific "states"
1. Ones that select certain elements of a set based on where they are in the tree

## Style link and form elements depending on their "state"

1. :hover
	- selects elements that have a mouse "hovering" on top of them
1. :active
	- selects elements that have been clicked on
1. :focus
	- you can use Tab to jump between links and form fields
	- when you do this, the currently selected link is "focused" on
1. :visited
	- selects links that have been visited
1. :checked
	- selects radio button and check boxes in forms that have been selected
	- usually not used to style the input directly, but style sibling elements (https://css-tricks.com/the-checkbox-hack/)

## Style the first and last elements of a container

1. :first-child
	- selects only elements that are the first child of their parent
1. :first-of-type
	- selects only elements that are the first of their tag type of their parent
	```html
	<section>
		<div>hi</div>
		<p>paragraph</p>
	</section>
	```
	```css
	section :first-of-type {
	  background:yellow; /* both div and p tags will have a yellow background */
	}
	```
1. :last-child
	- selects only elements that are the last child of their parent
1. :last-of-type
	- selects only elements that are the last of their tag type of their parent

## Style an element depending on what child number it is of its parent

### selectors

1. :nth-child()
	- selects only elements that are the nth child of their parent, where n is specified inside the parentheses
1. :nth-of-type()
	- selects only elements that are the nth of their tag type of their parent, where n is specified inside the parentheses
1. :nth-last-child()
	- selects only elements that are the nth to last child of their parent, where n is specified inside the parentheses
1. :nth-last-of-type()
	- selects only elements that are the nth to last of their tag type of their parent, where n is specified inside the parentheses

### what can N be?

1. a number (1st element is 1, not 0)
1. `even` or `odd`
1. a formula in the form of `an + b`
	- you specify `a` and `b` as integers
	- if an element's index equals the value of that equation for some integer n, the rule applies that element
	- examples
		- 3n - indexes selected: 3, 6, 9
		- 3n+1 - indexes selected: 1, 4, 7, 10

## Style an element if it is the only child of its parent

1. :only-child
	- selects elements that are the sole child of their parent
1. :only-of-type
	- selects elements that are the sole child of their tag type of their parent

## Negate a selector

1. :not()
	- selects everything except whatever elements are selected by the selector inside the parentheses