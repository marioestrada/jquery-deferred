# jQuery Deferred

Defer Javascript execution after DOMContentLoaded is run.

# Usage

To defer Javascript execution just set the type of the `src` attribute to `text/deferred-javascript` on the script element:

```html
<script type="text/deferred-javascript">
	// Will be run after the DOM is loaded.
	alert('Hello World!');
</script>
```

You can also defer the execution of a linked javascript file:

```html
<!-- The Javascript file will run after the DOM is loaded -->
<script type="text/deferred-javascript" src="/js/deferred.script.js"></script>
```

# Options

You can set the Javascript to run after a delay, just set the `data-delay` attribute to a number in milliseconds:

```html
<script type="text/deferred-javascript" data-delay="1500">
	// Will be run after the DOM is loaded and 1500ms have passed.
	alert('Hello World! I\'m 1.5 seconds late, sorry.');
</script>
```