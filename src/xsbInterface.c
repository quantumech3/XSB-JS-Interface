/**
 * Summary:
 * 		This component contains XSB C Interface wrapper methods that are exported to JS during Emscripten's build phase
 * 
 * 
 * Credits: Developed by Scott Burgert & Paul Fodor in 2020
 */

#include "xsbInterface.h"

/**
 * Streight call to xsb_init_string()
 */
int _xsb_init_string(char* path)
{
	return xsb_init_string(path);
}

/**
 * Streight call to xsb_close()
 */
int _xsb_close()
{
	return xsb_close();
}

/**
 * Streight call to xsb_command_string()
 */
int _xsb_command_string(char* command)
{
	return xsb_command_string(command);
}

/**
 * Calls xsb_query_string_string_b(), gets the answerLength, and returns a pointer to the query result
 */
int _xsb_query_string_string_b(char* query, int maxAnswerLength, char* sep)
{
	// Will be set to the actual length of the queries answer
	int answerLength = 0;

	// Buffer containing output
	char* outputBuffer = calloc(maxAnswerLength, 1);

	// Query XSB
	xsb_query_string_string_b(query, outputBuffer, maxAnswerLength, &answerLength, sep);

	// Add null terminator at end of answer
	outputBuffer[answerLength] = '\0';

	return (int)outputBuffer;
}

/**
 * Streight call to _xsb_next_string_b()
 */
int _xsb_next_string_b(int maxAnswerLength, char* sep)
{
	// Will be set to the actual length of the queries answer
	int answerLength = 0;

	// Buffer containing output
	char* outputBuffer = calloc(maxAnswerLength, 1);

	xsb_next_string_b(outputBuffer, maxAnswerLength, &answerLength, sep);

	// Add null terminator at end of answer
	outputBuffer[answerLength] = '\0';

	return (int)outputBuffer;
}

/**
 * Streight call to _xsb_close_query()
 */
int _xsb_close_query()
{
	return xsb_close_query();
}

/**
 * Streight call to _xsb_get_init_error_message()
 */
char* _xsb_get_init_error_message()
{
	return xsb_get_init_error_message();
}

/**
 * Streight call to _xsb_get_error_message()
 */
char* _xsb_get_error_message()
{
	return xsb_get_error_message();
}