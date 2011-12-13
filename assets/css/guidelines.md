# Stylesheet development guidelines

## Getting started

* Indent work with tabs. No spaces unless vertically aligning for readability.
* Do not leave trailing whitespace or whitespace on empty lines.
* Use UTF-8 encoding with UNIX line endings for consistancy.

## Important rules

* No inline hacks or parsing bugs for IE specific rules; put it in to the right stylesheet.
* Enhance sensibly. Use duplicate rules that will fall back (A CSS parser ignores what it doesn't understand)

## OOCSS
1. Separate structure and skin
2. Separate container and content

## Coding style

### Naming conventions

* Hyphens are used for easily readable names, not camelCase E.G. '#home-page-tabs'
* Underscores denote an extended class. E.G. '.large_button' extends '.button'
* Run test code through CSSLint or Page Speed to pick out obvious bugs (this also means keeping selectors short and using pre-defined font sizes and colours as much as possible)
* If you over-specify or use pseudo-element or attribute selectors leave a comment to explain why it is necessary.

### Formatting

* Keep selectors as short as possible. IDs and classes are much faster and more maintainable than traversing elements
* Indentation (using tabs only) denotes that the selector is a child element or an extension of the previous
* Property and value pairs on new lines
* Line up vendor prefixes with spaces

### Property order

It is best to group properties by type and order them in a consistent way...

1. Position (E.G. position, top, left, float)
2. Layout box (E.G. display, box sizing, width, height, padding, margin, borders)
3. Text (E.G. weight/style, text size, line height, font face, decoration, color)
4. Backgrounds
5. Other presentational stuff (E.G. Box shadow, cursor, opacity, z-index)
