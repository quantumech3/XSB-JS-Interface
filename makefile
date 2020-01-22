# Summary:
# 		This makefile provides basic tools for building and debugging the XSB-JS-Interface library
# 
# Build commands:
# 		* build: Builds xsbInterface.c and outputs build files to ./out
#		* run: Can be used to test this library
#
# Credits: Developed by Scott Burgert & Paul Fodor in 2020

build:
	# Execute Emscripten build command
	emcc ./src/xsbInterface.c ./src/config/saved.o/xsb.o -o ./out/xsbInterface.js -Oz --preload-file "./src/xsbDir/@/" -I ./src/emu/ -I ./src/config/ -s USE_PTHREADS=1 -s TOTAL_MEMORY=1024MB
	
	# Append pre.js and post.js to beginning and end of xsbInterface.js
	cp ./out/xsbInterface.js ./out/xsbInterface.temp.js
	cat ./src/pre.js ./out/xsbInterface.temp.js ./src/post.js > ./out/xsbInterface.js
	rm ./out/xsbInterface.temp.js

run:
	emrun ./out/