/**
* 
* Summary:
* 		This component contains all code in the JS component of the XSB-JS-Interface that is executed after the initialization of the Emscripten Runtime.
* 
* Overview:
* 		* XSB.LowLevel:	Structure containing direct ports of XSB C Interface methods
* 			* bool xsb_command_string(string command): Executes the XSB command 'command' and returns status codes similar to xsb_command_string from the XSB C Interface
* 			* string xsb_query_string_string_b(string command, string maxAnswerLength, string seperator): Calls xsb_query_string_string_b() in C and returns the value of the first query with max string length of 'answerLength'
* 			* string xsb_next_string_b(string maxAnswerLength, string seperator): Prints next result of currently open query with 'seperator' seperating each returned value max string length of 'maxAnswerLength'
* 			* void xsb_close_query(): Closes the currently active query
* 			* void xsb_close(): Shuts down the XSB Interpreter. Note that the XSB interpreter cannot be initialized multiple times in the same program
* 			* string xsb_get_init_error_message(): Returns error message resulting from XSB initialization such an error occured, else returns an empty string
* 			* bool xsb_init_string(string path): Attempts to initialize the XSB runtime with its root directory located at 'path' in Emscripten's File System. 
* 			* string xsb_get_error_message(): Returns error message resulting from an XSB query if such an error occured, else returns an empty string
*			* int status(): Returns the status code obtained by the last XSB C interface function call
*				* XSB_SUCCESS = 0
*				* XSB_FAIL = 1
*				* XSB_ERROR = 2
* 		
* 		* string[] XSB.execute(String command): Top-level method. Executes the XSB command 'command' and returns the result/s from that command as the following structure:		
*			{
*				var: [
*					["val1 from var0 query", ..],
*					["val2 from var1 query", ..]
*				],
*				isTrue: IF results were able to be queried:
*							return boolean corrosponding to status() after the last query attempt
*						ELSE
*							return boolean corrosponding to status() before the first query attempt
*			}
* 			Details about the usage of this method are in the README for this repository
*
*		* void XSB.init(): Initializes XSB. This method will throw an error if either											
* 																XSB fails to initialize											
*																XSB has already been initialized
* 
* Credits: Developed by Scott Burgert & Paul Fodor in 2020
*/

/**
 * "Instantiate C String". Allocates memory for a CString, sets the value of that string to 'text', and returns the memory address of the string
 */
var __instCString = function(text)
{
	// Allocate memory for string (Needs 1 byte per character + 8 bytes for "book-keeping" http://web.eecs.utk.edu/~huangj/cs360/360/notes/Malloc1/lecture.html)
	let ptr = _malloc(text.length + 8)

	// Globally declare a TextEncoder so the declaration never has to happen again
	var enc = new TextEncoder()

	// Set the value of the memory at ptr to the string 'text
	Module.HEAPU8.set(enc.encode(text + "\0"), ptr);

	return ptr
}

/**
 * Get value of CString at address ptr with a 'size' amount of characters.
 */
var __getCString = function(ptr, size)
{
	// Globally declare a TextDecoder so the declaration never has to happen again
	var dec = new TextDecoder();

	// Get raw data from memory
	rawData = new Uint8Array(new Uint8Array(Module.HEAPU8.buffer, ptr, size))

	// Cast raw data to a string
	str = dec.decode(rawData)

	// Cut off extra string data (Data is aquired in 8 byte chunk)
	str = str.substring(0, size)

	return str
}

/**
 * Attempts to initialize the XSB runtime with its root directory located at 'path' in Emscripten's File System. 
 */
XSB.LowLevel.xsb_init_string = function(path)
{
	// Define a variable in Emscripten and set that value to the value of 'path'
	let cPath =  __instCString(path)

	// Call exposed C method
	return Module.__xsb_init_string(cPath);
}

/**
 * Attempt to close XSB
 */
XSB.LowLevel.xsb_close = function()
{
	return Module.__xsb_close();
}

/**
 * Returns error message resulting from XSB initialization such an error occured, else returns an empty string
 */
XSB.LowLevel.xsb_get_init_error_message = function()
{
	// Return the string at the located specified by the char* returned by __xsb_get_init_error_message()
	return UTF8ToString(Module.__xsb_get_init_error_message())
}

/**
 * Returns error message resulting from an XSB query if such an error occured, else returns an empty string
 */
XSB.LowLevel.xsb_get_error_message = function()
{
	// Return the string at the located specified by the char* returned by __xsb_get_init_error_message() truncated at the first null terminator
	return UTF8ToString(Module.__xsb_get_error_message())
}

/**
 * Closes the currently active query
 */
XSB.LowLevel.xsb_close_query = function()
{
	Module.__xsb_close_query()
}

/**
 * Calls xsb_query_string_string_b() in C and returns the value of the first query with max string length of 'answerLength'
 */
XSB.LowLevel.xsb_query_string_string_b = function(command, maxAnswerLength, seperator)
{
	// Put method arguements into C memory
	cCommandPtr = __instCString(command);
	cSeperatorPtr = __instCString(seperator)

	// Get pointer to the query's answer
	cAnswerPtr = Module.__xsb_query_string_string_b(cCommandPtr, maxAnswerLength, cSeperatorPtr)

	// Return a version of the query's answer that is truncated at the first null-terminator
	return UTF8ToString(cAnswerPtr, maxAnswerLength);
}

/**
 * Prints next result of currently open query with 'seperator' seperating each returned value max string length of 'maxAnswerLength'
 */
XSB.LowLevel.xsb_next_string_b = function(maxAnswerLength, seperator)
{
	cSeperatorPtr = __instCString(seperator)

	// Get pointer to the query's answer
	cAnswerPtr = Module.__xsb_next_string_b(maxAnswerLength, cSeperatorPtr)

	// Return a version of the query's answer that is truncated at the first null-terminator
	return UTF8ToString(cAnswerPtr, maxAnswerLength);
}

/**
 * Executes the XSB command 'command' and returns status codes similar to xsb_command_string from the XSB C Interface
 */
XSB.LowLevel.xsb_command_string = function(command)
{
	let cCommandPtr = __instCString(command)
	__xsb_command_string(cCommandPtr);
}

/**
 * Returns the status code obtained by the last XSB C interface function call
 * 		* XSB_SUCCESS = 0
 *		* XSB_FAIL = 1
 *		* XSB_ERROR = 2
 */
XSB.LowLevel.status = function()
{
	return __status()
}

/**
* Top-level method. Executes the XSB command 'command' and returns the result/s as the following structure:
*	{
*		var: [["var0 value0", "var0 value1, .."], ["var1 value0", "var1 value1, .."], ..],
*		isTrue: True or false depending on whether XSB would return 'yes.' or 'no.' for this query
*	}
*/
XSB.execute = function(command)
{
	let result = 
	{
		var: [],
		isTrue: false
	}

	// Convert XSB.status() to associated boolean. XSB_SUCCESS = 0 -> True, 
	//											   XSB_FAIL = 1 -> False
	//											   Other values -> other values
	let xsbStatusToBool = function(status)
	{
		switch (status) 
		{
			case 0:
				return true;
			case 1:
				return false;
			default:
				return status
		}
	}

	// Parse 1 permutation of an XSB variable string resulting from a query and append each value to the appropriate index in result.var[]
	let appendToResult = function(rawResult="", seperator="")
	{
		splitResult = rawResult.split(seperator)

		// Append query values to respective variable indices in result.var
		for(let i = 0; i < splitResult.length; i++)
		{
			// If an array has not been instantiated for the ith variable, instantiate it
			if(!result.var[i])
				result.var[i] = []

			// Push query result to element in result.var corrrosponding to the variable
			result.var[i].push(splitResult[i])
		}
	}

	// If result from first query is not ""
	if(initResult = XSB.LowLevel.xsb_query_string_string_b(command, 200, ","))
	{
		// If XSB throws error
		if(error = XSB.LowLevel.xsb_get_error_message())
			throw "XSB-JS-INTERFACE ERROR: " + error

		// Append variable values to result.var[]
		appendToResult(initResult, ',')

		// While there are values to query
		let _status = [xsbStatusToBool(XSB.LowLevel.status()), xsbStatusToBool(XSB.LowLevel.status())]
		while(nextResult = XSB.LowLevel.xsb_next_string_b(200, ','))
		{
			_status.shift()
			_status[1] = xsbStatusToBool(XSB.LowLevel.status())

			if(error = XSB.LowLevel.xsb_get_error_message())
				throw "XSB-JS-INTERFACE ERROR: " + error

			// Append variable values to result.var[]
			appendToResult(nextResult, ',')
		}

		// result.isTrue = True or false depending on XSB.status()
		result.isTrue = _status[0]
	}
	else
	{
		// result.isTrue = True or false depending on XSB.status()
		result.isTrue = xsbStatusToBool(XSB.LowLevel.status())

		// Close XSB query
		XSB.LowLevel.xsb_close_query();
	}

	return result
}

/**
 * void XSB.init(): Initializes XSB. This method will throw an error if either			
 *														* XSB fails to initialize			
 *														* XSB has already been initialized
 */
XSB.init = function()
{
	// Delay 1 second before starting XSB to assure that these wrapper functions dont get called before Emscripten Initializes
	setTimeout(function()
	{
		if(XSB.LowLevel.xsb_init_string("/"))
			throw "XSB-JS-INTERFACE ERROR: " + XSB.LowLevel.xsb_get_init_error_message()
	}, 1000)	
}

