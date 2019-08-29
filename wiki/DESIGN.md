# CSS - Design

## Lesson Objectives

1. Support all browsers at a minimal level
1. Use specific applications to measure spacing in designs
1. Create self-contained modules
1. Interpret mockups
1. Work well with designers

## Support all browsers at a minimal level

### Not all browser support is the same and support for some technology may vary:

1. It takes too much time to make sure the site is exactly the same in all browsers
1. Build a site so that if it's going to break, it's at least functional, if it isn't pretty
	- Graceful Degradation

### How to cope:

1. Use http://caniuse.com/ to see what's supported
1. Cutting edge CSS properties often have browser prefixes in front of them
	- -webkit- (Chrome, Safari, newer versions of Opera.)
	- -moz- (Firefox)
	- -o- (Old versions of Opera)
	- -ms- (Internet Explorer)
1. Follow a progressive enhancement building plan
	- start with building for the lowest level of technology and add functionality that enhances the experience as better tech is added
		- build a site first so that it works without CSS or JS
		- add on basic CSS
		- add on advanced CSS
		- add on JS

## Use specific applications to measure spacing in designs

1. Create account for Adobe Creative Cloud
1. Download Photoshop if you are okay with paying for it
1. If not, use http://apps.pixlr.com/editor/

## Create self-contained modules

1. Designers always have balance in the back of their mind when they design
1. Try to break up white space so that all elements have equal white space on opposite sides
1. In theory, you should be able to move elements around in any order, and the site will look good

## Interpret mockups

1. The repetitive reuse of design elements throughout the site create a sense of cohesion
1. Should have only a couple of font-families
1. Should have only a couple different font-sizes
1. Should have only a couple different colors
1. Elements like buttons should look the same throughout
1. Typically there is one font-size for body copy throughout the site
	- set the html tag's font-size to that
	- this way, most modules will have a font-size of 1rem

## Work well with designers

1. designers are insanely overworked
	- mistakes happen
		- keep basic design principles running in your head
		- use your best judgement or ask the designer if something looks weird
		- estimates are okay
	- hopefully they'll come back and review
		- they or the boss/client often change their mind
		- if you set things up well, it will be easy to make changes
1. go beyond what they're thinking, which is usually just a pretty image
	- think about what happens when elements are added, removed, or the content is altered
	- what happens when a user plays with their screen
	- what happens when a CSS property is not supported by the browser
1. part of your job is increasingly becoming more about filling in the gaps the designers leave out