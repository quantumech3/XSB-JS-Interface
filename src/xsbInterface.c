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
 * Streight call to _xsb_query_string_string_b()
 */
int _xsb_query_string_string_b(char* a, char* b, int c, int* d, char* e)
{
	return xsb_query_string_string_b(a, b, c, d, e);
}

/**
 * Streight call to _xsb_next_string_b()
 */
int _xsb_next_string_b(char* a, int b, int* c, char* d)
{
	return xsb_next_string_b(a, b, c, d);
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
EMSCRIPTEN_KEEPALIVE
char* _xsb_get_error_message()
{
	return xsb_get_error_message();
}