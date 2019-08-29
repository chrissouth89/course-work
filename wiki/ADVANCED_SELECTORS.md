# CSS - Advanced Selectors

## Lesson Objectives
1. Explain why we need advanced selectors
1. List advanced selectors

## Explain why we need advanced selectors

Advanced selectors help eliminate extra classes.  They provide no new functionality, but they make your code cleaner

## List advanced selectors

### Family Selectors

1. *
	- selects everything
	- useful for when you want to style everything.  Can add an optional ancestor for more specificity
	```html
		<div>
			<a class="style-me">content</a>
			<a class="style-me">content</a>
			<span class="style-me">content</span>
		</div>
	```
1. >
	- selects an immediate child
	- if you want to add styling to just a child, but the parent has descendants that are similar to child
	```html
		<ul>
			<li>
				<ul>
					<li></li>
				</ul>
			</li>
		</ul>
	```
1. ~
    - sibling selector
	- only selects subsequent siblings, not preceding siblings
	```html
		<h1>Title</h1>
		<p>paragraph</p>
		<ul>
			<li><p>list paragraph</p></li>
		</ul>
		<p>paragraph</p>
	```
1. +
	- immediate sibling selector
    - only selects first sibling
	```html
		<h1>Title</h1>
		<p>paragraph</p>
		<ul>
			<li><p>list paragraph</p></li>
		</ul>
		<p>paragraph</p>
	```

### Attribute Selectors

You can test for any attribute, not just id/class

Here's our example: `<a href='http://www.google.com'>link</a>`

1. [attr]
	- test to see if an attribute exists
	- `a[href]`
1. [attr='foo']
	- test an exact match
	- `a[href="http://www.google.com"]`
1. [attr^='foo']
	- test the start of the attribute
	- `a[href^="http"]`
1. [attr$='foo']
	- test the end of the attribute
	- `a[href$="com"]`
1. [attr*='foo']
	- test a substring
	- `a[href*="w.goo"]`
1. [attr~='foo']
	- test an exact word separated by space
	- `<a data-values="value1 value2">link</a>`
	- `a[data-values~="value2"]`
1. [attr|='foo']
	- test the start of a hyphenated word
	- `<html lang="en-US">`
	- `html[lang|="en"]`