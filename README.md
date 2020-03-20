# XSB-JS-Interface
Similar to the XSB C Interface, but for JS!

------------------------

### Summary
The XSB-JS-Interface library is a Web Assembly port of the XSB C Interface. The XSB-JS-Interface library also provides high-level methods to add a layer of abstraction between you and XSB. Emscripten was used to port the XSB-JS-Interface library and is required to edit the source code. The XSB JS Interface can be broken in to 2 parts: the C component, and the JS component. The C component of this library inside `./src/xsbInterface.c` contains all the wrapper functions that the JS component of this library uses to add a layer of abstraction. Additionally, all code in `pre.js` is executed before the Emscripten Runtime is, and all code in `post.js` is executed after the Emscripten Runtime has finished initializing. `pre.js` mainly contains definitions for callback functions such as `onOutput()` whereas `post.js` contains the rest of the `XSB` class.

------------------------
### How to rebuild this library

**1**. Make changes to code as nessasary

**2**. Inside the top-level directory for this project, run `make build`

------------------------
### How to setup this library

**1**. Copy all files inside `./out` into your project's directory

**2**. Inside your webpage, import `xsbInterface.js`

```html
<script src="xsbInterface.js"></script>
```

**3**. Thats it! It's that easy! 🕶✌

------------------------
### Getting started

To get started with this library, experiment with the code below!
```javascript
// Initialize XSB
XSB.init()

// It is possible to override how XSB handles printing.
// In this case, if XSB prints an error message, console.err() will be invoked
// else the command is printed with console.log()
XSB.Events.onOutput = function(output, isError)
{
  if(isError)
    console.err(output)
  else
    console.log(output)
}

// Tell XSB to execute "X is 6, Y is 6, X == Y."
// XSB.execute returns a structure containing return values resulting from the xsb query:
// XSB.execute("X is 6, Y is 6, X == Y.") should return the following
//	{
//		var:	[
//				["6"],
//				["6"]
//			],
//		isTrue:
//			true
//	}
//
// In general, XSB.execute() returns the following:
//{
//	var: [
//		["val1 from var0 query", ..], // Array containing query results of var1. The Nth result maps to the N-1th index
//		["val2 from var1 query", ..]  // Array containing query results of var2. The Nth result maps to the N-1th index
		..			      // Variables are ordered in the same way that they are ordered in the query. 
		..			      // For example, in the query "X is 5, Y is 6.", 'var' would be [["5"], ["6"]]
//	],
//	isTrue: Boolean // Returns 'true' for any query where XSB would return 'yes.', else returns false
//}
result = XSB.execute("X is 6, Y is 6, X == Y.")
console.log("Values of X: " + result.var[0].toString())
console.log("Values of Y: " + result.var[1].toString())
if(result.isTrue)
	console.log("The query returned true.")
else
	console.log("The query returned false.")

// Print "Hello world" using a low-level method ported directly from the C Interface
// Other directly-ported methods from the XSB C Interface reside inside the 'LowLevel' section of the XSB-JS-Interface library as well.
XSB.LowLevel.xsb_command_string("writeln('Hello world').")

// Get the latest status code from XSB
// Returns the latest status code from the latest XSB function call
// For example, if xsb_command_string() returned XSB_SUCCESS, then XSB.LowLevel.status() would return 0 until the next function call
XSB.LowLevel.status()
```
	

------------------------
### Please note that
* Not all methods from the XSB-C-Interface have been ported to this library yet.
* To execute `make build`, you must have Emscripten 1.38.30 installed.
* This library does not currently does support Microsoft Edge due to Edge's lack of support for the `TextEncoder` class
