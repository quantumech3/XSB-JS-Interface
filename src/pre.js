/**
* 
* Summary:
* 		This component contains all code in the JS component of the XSB-JS-Interface that is executed before the initialization of the Emscripten Runtime.
* 		such as XSB.Event methods and Emscripten output handling overrides
* 
* Overview:
* 		* XSB.Events: Structure containing various XSB Interpreter callbacks
* 			* void onOutput(String output, Bool isError): This method is called when XSB would normally output to a terminal. 
* 														   onOutput() overrides Emscripten's stdout and stderr handling
* 
* Credits: Developed by Scott Burgert & Paul Fodor in 2020
*/

