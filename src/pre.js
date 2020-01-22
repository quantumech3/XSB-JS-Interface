/**
* 
* Summary:
* 		This component contains all code in the JS component of the XSB-JS-Interface that is executed before the initialization of the Emscripten Runtime.
* 		such as XSB.Events methods and Emscripten output handling overrides
* 
* Overview:
* 		* XSB.Events: Structure containing various XSB Interpreter callbacks
* 			* void onOutput(String output, Bool isError): This method is called when XSB would normally output to a terminal. 
* 														   onOutput() overrides Emscripten's stdout and stderr handling
* 
* Credits: Developed by Scott Burgert & Paul Fodor in 2020
*/

// Create empty XSB structure in global scope
var XSB = 
{
	Events: {},
	LowLevel: {}
}

/**
 * Override this function to control how XSB prints to the console
 * 'isError' is true when XSB prints to stderr
 * 'output' is true when XSB prints to stdout
 */
XSB.Events.onOutput = function(output, isError)
{
	// This is the default method for the XSB-JS-Interface library: Print an error if XSB output to stderr else print to stdout
	if(isError)
   		console.error(output)
 	else
    	console.log(output)
}

/**
 * Override Emscripten printing events
 */
var Module = 
{
	print: function(text)
	{
		// Callback a regular print message to XSB library
		XSB.Events.onOutput(text, false);
	},
	printErr: function(text)
	{
		// Callback a 'errored' print message to XSB library
		XSB.Events.onOutput(text, true);
	}
}
/**
 * 
 */