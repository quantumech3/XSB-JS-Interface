/**
* 
* Summary:
* 		This component contains all code in the JS component of the XSB-JS-Interface that is executed after the initialization of the Emscripten Runtime.
* 
* Overview:
* 		* XSB.LowLevel:	Structure containing direct ports of XSB C Interface methods
* 			* bool xsb_command_string(string command): Executes the XSB command 'command' and returns true if an error occurred during the calling of the command
* 			* string xsb_query_string_string_b(string command, string seperator): Calls xsb_query_string_string_b() in C and returns the value of the first query
* 			* string xsb_next_string_b(string seperator): Prints next result of currently open query with 'seperator' seperating each returned value
* 			* void xsb_close_query(): Closes the currently active query
* 			* void xsb_close(): Shuts down the XSB Interpreter. Note that the XSB interpreter cannot be initialized multiple times in the same program
* 			* string xsb_get_init_error_message(): Returns error message resulting from XSB initialization such an error occured, else returns an empty string
* 			* bool xsb_init_string(string path): Attempts to initialize the XSB runtime with its root directory located at 'path' in Emscripten's File System. 
* 			* string xsb_get_error_message(): Returns error message resulting from an XSB query if such an error occured, else returns an empty string
* 		
* 		* string[] XSB.execute(String command): Top-level method. Executes the XSB command 'command' and returns the result/s from that command as a string[]
* 												if such result exist, else returns an empty string array.
* 												For example:
* 													A query 'member(X, [0, 1]), member(Y, [2, 3]).' made using XSB.execute() would return the following elements:
* 																["0, 2", "0, 3", "1, 2", "1, 3"]
*
*		* void XSB.init(): Initializes XSB. This method will throw an error if either											* XSB fails to initialize											* XSB has already been initialized
* 
* Credits: Developed by Scott Burgert & Paul Fodor in 2020
*/

