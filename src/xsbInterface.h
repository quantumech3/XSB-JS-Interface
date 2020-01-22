/**
 * Summary:
 * 		This component contains XSB C Interface wrapper method declarations that are exported to JS during Emscripten's build phase
 * 
 * Credits: Developed by Scott Burgert & Paul Fodor in 2020
 */

#include <stdio.h>
#include <cinterf.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int _xsb_command_string(char*); //

EMSCRIPTEN_KEEPALIVE
int _xsb_query_string_string_b(char*,char*,int,int*,char*); //

EMSCRIPTEN_KEEPALIVE
int _xsb_next_string_b(char*,int,int*,char*); //

EMSCRIPTEN_KEEPALIVE
int _xsb_close_query(); //

EMSCRIPTEN_KEEPALIVE
int _xsb_close(); // 

EMSCRIPTEN_KEEPALIVE
int _xsb_init_string(char*); //

EMSCRIPTEN_KEEPALIVE
char* _xsb_get_init_error_message(); // 

EMSCRIPTEN_KEEPALIVE
char* _xsb_get_error_message();