# Javascript (and jQuery) development guidelines

## Getting started

* Indent work with tabs. No spaces unless vertically aligning for readability.
* Do not leave trailing whitespace or whitespace on empty lines.
* Use UTF-8 encoding with UNIX line endings for consistancy.

## Good practice

* Run code through JSHint periodically to pick out obvious bugs and highlight efficiency
* Don't just throw any plug-in at a page to solve a problem. Plug-ins should be evaluated and agreed by all developers.

## Naming conventions

* Prefix jQuery objects with a dollar sign E.G. `$this = $(this), that = 'that'`;

## Efficiency

* Keep jQuery factory selectors as simple as possible (IDs, tags and classes) and use appropriate traverse methods when necessary E.G. `$this.children()`
* Use the most efficient method for binding data and events in context (usually $.delegate and $.data)

## Formatting

* Place braces on new lines
* Arguments may be passed into functions without surrounding spaces unless the argument must be evaluated
* Use JSDoc to comment functions and methods and provide an `@example` if relying on existing or building a new markup structure.
