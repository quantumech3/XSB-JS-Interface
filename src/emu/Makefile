##############################################################################
#                                                                            #
# This is a Makefile for making the XSB emu directory.                       #
# It has two main entries: xsb and xsbora. The latter for generating         #
# executables with oracle support.                                           #
# The EXECUTABLE variable is set by the top make file, build/Makefile        #
#                                                                            #
##############################################################################

## File:      emuMakefile.in
## Author(s): kifer (adapted from the original XSB makefile)
## Copyright (C) The Research Foundation of SUNY, 1998
##
## XSB is free software; you can redistribute it and/or modify it under the
## terms of the GNU Library General Public License as published by the Free
## Software Foundation; either version 2 of the License, or (at your option)
## any later version.
##
## XSB is distributed in the hope that it will be useful, but WITHOUT ANY
## WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
## FOR A PARTICULAR PURPOSE.  See the GNU Library General Public License for
## more details.
##
## You should have received a copy of the GNU Library General Public License
## along with XSB; if not, write to the Free Software Foundation,
## Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
##
## $Id: emuMakefile.in,v 1.76 2013-01-04 15:02:16 dwarren Exp $
##


CC=/usr/include/emsdk/emscripten/1.38.30/emcc
CPP=/usr/include/emsdk/emscripten/1.38.30/emcc -E
CFLAGS= -O4  -D PTHREAD_MUTEX_ERRORCHECK_NP
# Compilation flags for files requiring lower optimization level
# (builtin.c,emuloop.c,tr_utils.c)
loaderCFLAGS=   -D PTHREAD_MUTEX_ERRORCHECK_NP
builtinsCFLAGS=   -D PTHREAD_MUTEX_ERRORCHECK_NP
emuloopCFLAGS=   -D PTHREAD_MUTEX_ERRORCHECK_NP
trutilsCFLAGS=   -D PTHREAD_MUTEX_ERRORCHECK_NP
CPPFLAGS=
LDFLAGS=  -lm -ldl -Wl,-export-dynamic -lpthread
ODBCSRC=
ODBCOBJ=
ODBC_CFLAGS=
INTERPROLOGSRC=
INTERPROLOGOBJ=
DLLTYPE=nodll
JAVA_HEADER_PATH=
JAVA_PLATFORM_HEADER_PATH=
SHAREDLIB_EXTENSION=so
DYNMOD_LDFLAGS=-shared

# For mno-cygwin
# -mdll option is needed so that MSVC files could link to dll
# however for old cygwin versions -dll option is used
DLLNAME=xsb.dll
DLL_LIBS=$(LDFLAGS)
LIB_OBJECTS=xsb.o
BASE_FILE=xsb.base
DEF_FILE=$(arch_config_prefix)/saved.o/xsb.def
LIB_FILE=libxsb.a
ENTRY_FUNCTION=_win_xsbent@12




XSBMOD_LDFLAGS= 

# Substitute an assignment for the MAKE variable, because
# BSD doesn't have it as a default.



# just to be sure the sh is used
SHELL=/bin/sh


# The default location for installation.
prefix=/home/quantumech/Desktop/XSB_Port/XSB
# where sources are
srcdir=/home/quantumech/Desktop/XSB_Port/XSB
VPATH=/home/quantumech/Desktop/XSB_Port/XSB
# Like `prefix', but used for architecture-specific files.
arch_config_prefix=/home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu

# Where to install XSB binaries
bindir=$(arch_config_prefix)/bin
# where XSB emu directory lives
emudir=$(srcdir)/emu
# where the object code goes
arch_config_objlibdir=$(arch_config_prefix)/saved.o

# Passed in from the top Makefile
EXECUTABLE=xsb

#=======================================================================
# Stuff to automatically make the dependencies.
#=======================================================================
#
DEPEND = makedepend
#DEPENDFLAGS = -m
#


SRCS =	auxlry.c biassert.c builtin.c call_xsb.c cinterf.c conc_compl.c \
	debug_xsb.c dis.c dynload.c dynamic_stack.c deadlock.c \
	emuloop.c error_xsb.c findall.c function.c \
	hash_xsb.c hashtable_xsb.c \
	heap_xsb.c init_xsb.c inst_xsb.c io_builtins_xsb.c \
	loader_xsb.c main_xsb.c memory_xsb.c orient_xsb.c \
	pathname_xsb.c psc_xsb.c random_xsb.c \
		remove_unf.c residual.c rw_lock.c \
	scc_xsb.c slgdelay.c socket_xsb.c string_xsb.c \
	storage_xsb.c struct_manager.c sub_delete.c subp.c \
	system_xsb.c table_stats.c tables.c \
	thread_xsb.c timer_xsb.c token_xsb.c \
	tr_utils.c trace_xsb.c trie_lookup.c trie_search.c tries.c \
	tst_insert.c tst_retrv.c tst_unify.c tst_utils.c varstring.c \
	ubi_BinTree.c ubi_SplayTree.c \
	hashtable.c hashtable_itr.c \
	sha1.c md5.c \
	url_encode.c getMemorySize.c \
	incr_xsb.c call_graph_xsb.c 


ORASRCS = $(SRCS) orastuff.c


OBJS =	auxlry.o biassert.o builtin.o call_xsb.o cinterf.o conc_compl.o \
	debug_xsb.o dis.o dynload.o dynamic_stack.o deadlock.o \
	emuloop.o error_xsb.o findall.o function.o \
	hash_xsb.o  hashtable_xsb.o \
	heap_xsb.o init_xsb.o inst_xsb.o io_builtins_xsb.o \
	loader_xsb.o memory_xsb.o orient_xsb.o \
	pathname_xsb.o psc_xsb.o random_xsb.o \
		remove_unf.o residual.o rw_lock.o \
	scc_xsb.o slgdelay.o socket_xsb.o string_xsb.o \
	storage_xsb.o struct_manager.o struct_intern.o sub_delete.o subp.o \
	system_xsb.o table_stats.o tables.o \
	thread_xsb.o timer_xsb.o token_xsb.o \
	tr_utils.o trace_xsb.o trie_lookup.o trie_search.o tries.o \
	tst_insert.o tst_retrv.o tst_unify.o tst_utils.o varstring.o \
	ubi_BinTree.o ubi_SplayTree.o \
	hashtable.o hashtable_itr.o \
	sha1.o md5.o \
	url_encode.o getMemorySize.o \
	incr_xsb.o call_graph_xsb.o 

# if emuMakefile.h exists, include it. Assume that it contains the var OTHEROBJS
-include $(arch_config_prefix)/emuMakefile.h

allOBJS = main_xsb.o ${OBJS} ${ODBCOBJ} ${INTERPROLOGOBJ}

ORAOBJS = $(OBJS) orastuff.o

allORAOBJS = $(allOBJS) orastuff.o

init::
	@echo -e "\nCompiling XSB with $(CC) using $(CFLAGS)\n"

xsb:: init $(allOBJS)
	@echo ""; echo "Making XSB executable $(EXECUTABLE) "; echo ""
	@echo -e "\t[$(CC)] -o $(EXECUTABLE) $(LDFLAGS) "
	@cd $(emudir); \
		$(CC) -o $(EXECUTABLE) $(allOBJS) ${OTHEROBJS} $(LDFLAGS)

xsbora:: init $(allORAOBJS)
	@echo ""; \
	  echo "Making XSB executable $(EXECUTABLE) with support for Oracle"; \
	  echo ""
	@echo -e "\t[$(CC)] -o $(EXECUTABLE) $(LDFLAGS) "
	@cd $(emudir); \
		$(CC) -o $(EXECUTABLE) $(allORAOBJS) ${OTHEROBJS} $(LDFLAGS)

# Goal for making an XSB load module to be linked with external
# C-drivers that pass queries to XSB
xsbmod:: $(OBJS) ${ODBCOBJ} ${INTERPROLOGOBJ}
	@echo ""; \
	   echo "Making a C-callable XSB module"; \
	   echo "ld  -o $(LIB_OBJECTS) $(XSBMOD_LDFLAGS) -r $(OBJS) ${ODBCOBJ} ${INTERPROLOGOBJ} ${OTHEROBJS}" ; \
	   echo ""
	@emcc  -o $(LIB_OBJECTS) $(XSBMOD_LDFLAGS) -r $(OBJS) ${ODBCOBJ} ${INTERPROLOGOBJ} ${OTHEROBJS}
	@cp $(LIB_OBJECTS) $(arch_config_objlibdir) 2> /dev/null || echo ""

xsbdynmod::
	@echo "Making XSB Shared Library $(bindir)/libxsb.$(SHAREDLIB_EXTENSION)"
	@ld -o libxsb.$(SHAREDLIB_EXTENSION) $(DYNMOD_LDFLAGS)  -fPIC $(XSBMOD_LDFLAGS)  $(OBJS) ${ODBCOBJ} ${INTERPROLOGOBJ} -lm
	@cp libxsb.$(SHAREDLIB_EXTENSION) $(bindir) 2>/dev/null || echo ""

# same as xsbmod, but with oracle support
xsboramod:: $(ORAOBJS)
	@echo ""; \
	   echo "Making a C-callable XSB module $(arch_config_objlibdir)/$(LIB_OBJECTS) with support for Oracle"; \
	   echo ""
	@ld -o $(LIB_OBJECTS) $(XSBMOD_LDFLAGS) -r $(ORAOBJS) ${OTHEROBJS}
	@cp $(LIB_OBJECTS) $(arch_config_objlibdir) 2> /dev/null || echo ""


depend::
	@$(DEPEND) $(DEPENDFLAGS) -- -I$(arch_config_prefix)  -- $(SRCS) $(ODBCSRC)
#	@$(DEPEND) $(DEPENDFLAGS) -- -I$(arch_config_prefix)  -I$(JAVA_PLATFORM_HEADER_PATH) -I$(JAVA_HEADER_PATH) $(CFLAGS) -- $(SRCS) $(ODBCSRC) ${INTERPROLOGSRC}

#
# create a new DLL library in cygwin (compiled with -mno-cygwin) environment
#
# LIB_OBJECTS: xsb.o 
# DLLNAME: name of the new dll
# DEFFILE is the name of the definitions file.
# BASEFILE temporary
# EXPFILE  temporary
# ENTRY is the entry point  int WINAPI startup (HINSTANCE, DWORD, LPVOID)

dll: $(DLLTYPE)

nodll:

cygdll: $(allOBJS) $(HEADERS) xsbmod
	@echo "$(CC) -Wl,--add-stdcall-alias -shared -o $(arch_config_prefix)/bin/$(DLLNAME) $(OBJS) ${ODBCOBJ} ${INTERPROLOGOBJ} -Wl,--out-implib=xsb.a -Wl,--export-all-symbols -Wl,--enable-auto-import $(DLL_LIBS)"
	@$(CC) -Wl,--add-stdcall-alias -shared -o $(arch_config_prefix)/bin/$(DLLNAME) $(OBJS) ${ODBCOBJ} ${INTERPROLOGOBJ} -Wl,--out-implib=xsb.a -Wl,--export-all-symbols -Wl,--enable-auto-import $(DLL_LIBS)
	@echo "$(CC) -o $(arch_config_prefix)/bin/xsb.exe  $(CFLAGS) -I$(arch_config_prefix) -L$(arch_config_prefix)/bin main_xsb.c $(XSBMOD_LDFLAGS) $(DLL_LIBS) -lxsb"
	@cp xsb.a $(arch_config_prefix)/bin/xsb.a
	@$(CC) -o $(arch_config_prefix)/bin/xsb.exe  $(CFLAGS) \
		-I$(arch_config_prefix) -L$(arch_config_prefix)/bin \
		main_xsb.c $(XSBMOD_LDFLAGS) $(DLL_LIBS) -lxsb


#=======================================================================
# Put in this group all actions (rules) of this Makefile.
#=======================================================================

interprolog_callback.o: interprolog_callback.c
	@echo -e "\t[$(CC)] interprolog_callback.c"
	@$(CC) -c -I$(arch_config_prefix) -I$(JAVA_PLATFORM_HEADER_PATH) -I$(JAVA_HEADER_PATH) $(CFLAGS) interprolog_callback.c
	@cp interprolog_callback.o $(arch_config_objlibdir) 2> /dev/null || echo ""

init_xsb.o: init_xsb.c
	@echo -e "\t[$(CC)] init_xsb.c"
	@$(CC) -I$(arch_config_prefix)  -c $(CFLAGS) init_xsb.c
	@cp init_xsb.o $(arch_config_objlibdir) 2> /dev/null || echo ""

dynload.o: dynload.c
	@echo -e "\t[$(CC)] dynload.c"
	@$(CC) -I$(arch_config_prefix)  -c $(CFLAGS) dynload.c
	@cp dynload.o $(arch_config_objlibdir) 2> /dev/null || echo ""

emuloop.o: emuloop.c
	@echo -e "\t[$(CC)] emuloop.c using $(emuloopCFLAGS)"
	@$(CC) -I$(arch_config_prefix)  -c $(emuloopCFLAGS) emuloop.c
	@cp emuloop.o $(arch_config_objlibdir) 2> /dev/null || echo ""

# Higher optimization level has problem with some versions of gcc
tr_utils.o: tr_utils.c
	@echo -e "\t[$(CC)] tr_utils.c using $(trutilsCFLAGS)"
	@$(CC) -I$(arch_config_prefix)  -c $(trutilsCFLAGS) tr_utils.c
	@cp tr_utils.o $(arch_config_objlibdir) 2> /dev/null || echo ""

builtin.o: builtin.c
	@echo -e "\t[$(CC)] builtin.c using $(builtinsCFLAGS)"
	@$(CC) -I$(arch_config_prefix)  -c $(builtinsCFLAGS) builtin.c
	@cp builtin.o $(arch_config_objlibdir) 2> /dev/null || echo ""

loader_xsb.o: loader_xsb.c
	@echo -e "\t[$(CC)] loader_xsb.c using $(loaderCFLAGS)"
	@$(CC) -I$(arch_config_prefix)  -c $(loaderCFLAGS) loader_xsb.c
	@cp loader_xsb.o $(arch_config_objlibdir) 2> /dev/null || echo ""

odbc_xsb.o: odbc_xsb.c
	@echo -e "\t[$(CC)] odbc_xsb.c"
	@$(CC) -I$(arch_config_prefix)  -c $(ODBC_CFLAGS) $(CFLAGS) odbc_xsb.c
	@cp odbc_xsb.o $(arch_config_objlibdir) 2> /dev/null || echo ""

.c.o:
	@echo -e "\t[$(CC)] $*.c"
	@$(CC) -I$(arch_config_prefix)  -c $(CFLAGS) $*.c
	@cp $*.o $(arch_config_objlibdir) 2> /dev/null || echo ""


#=======================================================================
# All dependencies are automatically generated by makedepend.
#=======================================================================

# DO NOT DELETE THIS LINE -- `makedepend' depends on it!

auxlry.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
auxlry.o: /usr/include/stdio.h xsb_time.h /usr/include/time.h
auxlry.o: /usr/include/features.h /usr/include/stdc-predef.h
biassert.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
biassert.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
biassert.o: debugs/debug_biassert.h /usr/include/stdio.h /usr/include/errno.h
biassert.o: /usr/include/features.h /usr/include/stdc-predef.h
biassert.o: /usr/include/string.h /usr/include/strings.h
biassert.o: /usr/include/stdlib.h /usr/include/alloca.h setjmp_xsb.h
biassert.o: /usr/include/setjmp.h auxlry.h basicdefs.h basictypes.h
biassert.o: cell_def_xsb.h context.h flag_defs_xsb.h hashtable_xsb.h
biassert.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h psc_xsb.h
biassert.o: psc_defs.h incr_xsb_defs.h export.h error_xsb.h cinterf.h
biassert.o: varstring_xsb.h cinterf_defs.h memory_xsb.h memory_defs.h
biassert.o: heap_xsb.h heap_defs_xsb.h register.h flags_xsb.h deref.h
biassert.o: inst_xsb.h token_xsb.h token_defs_xsb.h loader_xsb.h
biassert.o: trie_internals.h struct_manager.h tries.h thread_xsb.h
biassert.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
biassert.o: /usr/include/sched.h /usr/include/time.h choice.h tab_structs.h
biassert.o: debug_xsb.h table_status_defs.h slgdelay.h debugs/debug_delay.h
biassert.o: tr_utils.h trassert.h biassert_defs.h struct_intern.h
biassert.o: term_psc_xsb_i.h ptoc_tag_xsb_i.h binding.h cell_xsb_i.h
biassert.o: table_inspection_defs.h cut_xsb.h
builtin.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
builtin.o: /usr/include/stdio.h
builtin.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
builtin.o: debugs/debug_delay.h context.h cell_def_xsb.h basictypes.h
builtin.o: basicdefs.h setjmp_xsb.h /usr/include/setjmp.h
builtin.o: /usr/include/features.h /usr/include/stdc-predef.h flag_defs_xsb.h
builtin.o: hashtable_xsb.h conc_compl.h /usr/include/stdlib.h
builtin.o: /usr/include/alloca.h /usr/include/string.h /usr/include/strings.h
builtin.o: /usr/include/errno.h /usr/include/signal.h /usr/include/math.h
builtin.o: /usr/include/unistd.h /usr/include/netdb.h
builtin.o: /usr/include/netinet/in.h /usr/include/endian.h
builtin.o: /usr/include/rpc/netdb.h /usr/include/arpa/inet.h
builtin.o: /usr/include/fcntl.h auxlry.h cell_xsb.h box_defines.h
builtin.o: celltags_xsb.h error_xsb.h export.h psc_xsb.h psc_defs.h
builtin.o: incr_xsb_defs.h ubi_BinTree.h sys_include.h /usr/include/locale.h
builtin.o: ubi_SplayTree.h hash_xsb.h tries.h struct_manager.h choice.h
builtin.o: deref.h memory_xsb.h memory_defs.h heap_xsb.h heap_defs_xsb.h
builtin.o: register.h varstring_xsb.h flags_xsb.h loader_xsb.h binding.h
builtin.o: tab_structs.h debug_xsb.h table_status_defs.h slgdelay.h builtin.h
builtin.o: sig_xsb.h subp.h tr_utils.h trassert.h dynload.h cinterf.h
builtin.o: cinterf_defs.h residual.h tables.h trie_internals.h inst_xsb.h
builtin.o: thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
builtin.o: /usr/include/sched.h /usr/include/time.h rw_lock.h deadlock.h
builtin.o: struct_intern.h trace_xsb.h io_builtins_xsb.h io_defs_xsb.h
builtin.o: token_xsb.h token_defs_xsb.h storage_xsb.h storage_xsb_defs.h
builtin.o: wind2unix.h system_xsb.h random_xsb.h incr_xsb.h call_graph_xsb.h
builtin.o: table_stats.h url_encode.h table_inspection_defs.h unify_xsb.h
builtin.o: cell_xsb_i.h ptoc_tag_xsb_i.h term_psc_xsb_i.h conget_xsb_i.h
builtin.o: io_builtins_xsb_i.h file_modes_xsb.h std_pred_xsb_i.h
builtin.o: sp_unify_xsb_i.h cut_xsb.h bineg_xsb_i.h std_cases_xsb_i.h
call_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
call_xsb.o: /usr/include/stdio.h context.h cell_def_xsb.h basictypes.h
call_xsb.o: basicdefs.h setjmp_xsb.h /usr/include/setjmp.h
call_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h
call_xsb.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h register.h psc_xsb.h
call_xsb.o: psc_defs.h incr_xsb_defs.h export.h varstring_xsb.h flags_xsb.h
call_xsb.o: cell_xsb.h box_defines.h celltags_xsb.h auxlry.h error_xsb.h
cinterf.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
cinterf.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
cinterf.o: /usr/include/stdio.h /usr/include/string.h /usr/include/strings.h
cinterf.o: /usr/include/features.h /usr/include/stdc-predef.h
cinterf.o: /usr/include/stdlib.h /usr/include/alloca.h /usr/include/unistd.h
cinterf.o: /usr/include/errno.h auxlry.h basicdefs.h basictypes.h
cinterf.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
cinterf.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
cinterf.o: box_defines.h celltags_xsb.h memory_xsb.h memory_defs.h export.h
cinterf.o: register.h psc_xsb.h psc_defs.h incr_xsb_defs.h varstring_xsb.h
cinterf.o: flags_xsb.h deref.h heap_xsb.h heap_defs_xsb.h binding.h tries.h
cinterf.o: struct_manager.h choice.h subp.h emuloop.h cinterf.h
cinterf.o: cinterf_defs.h error_xsb.h orient_xsb.h loader_xsb.h thread_xsb.h
cinterf.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
cinterf.o: /usr/include/sched.h /usr/include/time.h cell_xsb_i.h
conc_compl.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
debug_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
debug_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
debug_xsb.o: /usr/include/stdio.h /usr/include/string.h
debug_xsb.o: /usr/include/strings.h /usr/include/features.h
debug_xsb.o: /usr/include/stdc-predef.h /usr/include/math.h auxlry.h
debug_xsb.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
debug_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
debug_xsb.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h error_xsb.h
debug_xsb.o: export.h psc_xsb.h psc_defs.h incr_xsb_defs.h binding.h
debug_xsb.o: memory_xsb.h memory_defs.h flags_xsb.h register.h
debug_xsb.o: varstring_xsb.h deref.h trie_internals.h inst_xsb.h
debug_xsb.o: struct_manager.h tries.h thread_xsb.h thread_defs_xsb.h
debug_xsb.o: /usr/include/pthread.h /usr/include/endian.h
debug_xsb.o: /usr/include/sched.h /usr/include/time.h choice.h tab_structs.h
debug_xsb.o: debug_xsb.h table_status_defs.h slgdelay.h debugs/debug_delay.h
debug_xsb.o: cinterf.h /usr/include/stdlib.h /usr/include/alloca.h
debug_xsb.o: cinterf_defs.h io_defs_xsb.h io_builtins_xsb.h token_xsb.h
debug_xsb.o: token_defs_xsb.h tr_utils.h tst_utils.h dynamic_stack.h
debug_xsb.o: cell_xsb_i.h
dis.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
dis.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
dis.o: /usr/include/stdio.h /usr/include/string.h /usr/include/strings.h
dis.o: /usr/include/features.h /usr/include/stdc-predef.h auxlry.h
dis.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
dis.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h conc_compl.h
dis.o: psc_xsb.h psc_defs.h incr_xsb_defs.h export.h hash_xsb.h loader_xsb.h
dis.o: cell_xsb.h box_defines.h celltags_xsb.h inst_xsb.h builtin.h
dis.o: memory_xsb.h memory_defs.h flags_xsb.h tries.h struct_manager.h
dis.o: tab_structs.h debug_xsb.h table_status_defs.h slgdelay.h
dis.o: debugs/debug_delay.h cell_xsb_i.h register.h varstring_xsb.h
dynload.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
dynload.o: dynelf_xsb_i.h /usr/include/dlfcn.h /usr/include/features.h
dynload.o: /usr/include/stdc-predef.h /usr/include/errno.h
dynload.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
dynload.o: /usr/include/string.h /usr/include/strings.h wind2unix.h auxlry.h
dynload.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
dynload.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h conc_compl.h
dynload.o: cell_xsb.h box_defines.h celltags_xsb.h memory_xsb.h memory_defs.h
dynload.o: export.h inst_xsb.h psc_xsb.h psc_defs.h incr_xsb_defs.h
dynload.o: error_xsb.h io_builtins_xsb.h io_defs_xsb.h token_xsb.h
dynload.o: token_defs_xsb.h flags_xsb.h varstring_xsb.h string_xsb.h
dynload.o: extensions_xsb.h
dynamic_stack.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
dynamic_stack.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
dynamic_stack.o: debugs/debug_tries.h /usr/include/stdio.h
dynamic_stack.o: /usr/include/stdlib.h /usr/include/alloca.h
dynamic_stack.o: /usr/include/features.h /usr/include/stdc-predef.h auxlry.h
dynamic_stack.o: basicdefs.h basictypes.h cell_def_xsb.h context.h
dynamic_stack.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h
dynamic_stack.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
dynamic_stack.o: celltags_xsb.h tst_aux.h debugs/debug_tables.h
dynamic_stack.o: dynamic_stack.h error_xsb.h export.h psc_xsb.h psc_defs.h
dynamic_stack.o: incr_xsb_defs.h tries.h struct_manager.h debug_xsb.h
dynamic_stack.o: flags_xsb.h memory_xsb.h memory_defs.h
deadlock.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
emuloop.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
emuloop.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
emuloop.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
emuloop.o: /usr/include/features.h /usr/include/stdc-predef.h
emuloop.o: /usr/include/signal.h /usr/include/string.h /usr/include/strings.h
emuloop.o: /usr/include/math.h auxlry.h basicdefs.h basictypes.h
emuloop.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
emuloop.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
emuloop.o: box_defines.h celltags_xsb.h register.h psc_xsb.h psc_defs.h
emuloop.o: incr_xsb_defs.h export.h varstring_xsb.h error_xsb.h inst_xsb.h
emuloop.o: deref.h memory_xsb.h memory_defs.h heap_xsb.h heap_defs_xsb.h
emuloop.o: sig_xsb.h emudef.h debugs/debug_attv.h loader_xsb.h binding.h
emuloop.o: flags_xsb.h trie_internals.h struct_manager.h tries.h thread_xsb.h
emuloop.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
emuloop.o: /usr/include/sched.h /usr/include/time.h choice.h sw_envs.h
emuloop.o: tab_structs.h debug_xsb.h table_status_defs.h slgdelay.h
emuloop.o: debugs/debug_delay.h tables.h subinst.h scc_xsb.h subp.h
emuloop.o: function.h tr_utils.h cut_xsb.h orient_xsb.h io_builtins_xsb.h
emuloop.o: io_defs_xsb.h token_xsb.h token_defs_xsb.h unify_xsb.h
emuloop.o: emuloop_aux.h remove_unf.h deadlock.h rw_lock.h hash_xsb.h
emuloop.o: builtin.h call_graph_xsb.h cinterf.h cinterf_defs.h
emuloop.o: struct_intern.h ptoc_tag_xsb_i.h cell_xsb_i.h tables_i.h
emuloop.o: tr_delay.h tr_code_xsb_i.h schedrev_xsb_i.h complete_local.h
emuloop.o: slginsts_xsb_i.h complete_xsb_i.h tc_insts_xsb_i.h
emuloop.o: debugs/debug_tries.h
error_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
error_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
error_xsb.o: /usr/include/stdio.h /usr/include/string.h
error_xsb.o: /usr/include/strings.h /usr/include/features.h
error_xsb.o: /usr/include/stdc-predef.h /usr/include/signal.h
error_xsb.o: /usr/include/stdlib.h /usr/include/alloca.h auxlry.h basicdefs.h
error_xsb.o: basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
error_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
error_xsb.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h psc_xsb.h
error_xsb.o: psc_defs.h incr_xsb_defs.h export.h subp.h register.h
error_xsb.o: varstring_xsb.h error_xsb.h io_builtins_xsb.h io_defs_xsb.h
error_xsb.o: token_xsb.h token_defs_xsb.h flags_xsb.h cinterf.h
error_xsb.o: cinterf_defs.h memory_xsb.h memory_defs.h tries.h
error_xsb.o: struct_manager.h choice.h inst_xsb.h tab_structs.h debug_xsb.h
error_xsb.o: table_status_defs.h slgdelay.h debugs/debug_delay.h tr_utils.h
error_xsb.o: binding.h cut_xsb.h deref.h term_psc_xsb_i.h thread_xsb.h
error_xsb.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
error_xsb.o: /usr/include/sched.h /usr/include/time.h emuloop.h orient_xsb.h
error_xsb.o: wind2unix.h heap_xsb.h heap_defs_xsb.h
findall.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
findall.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
findall.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
findall.o: /usr/include/features.h /usr/include/stdc-predef.h auxlry.h
findall.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
findall.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h conc_compl.h
findall.o: cell_xsb.h box_defines.h celltags_xsb.h deref.h register.h
findall.o: psc_xsb.h psc_defs.h incr_xsb_defs.h export.h varstring_xsb.h
findall.o: memory_xsb.h memory_defs.h error_xsb.h heap_xsb.h heap_defs_xsb.h
findall.o: binding.h subp.h flags_xsb.h loader_xsb.h cinterf.h cinterf_defs.h
findall.o: findall.h thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
findall.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
findall.o: tries.h struct_manager.h debug_xsb.h struct_intern.h cell_xsb_i.h
findall.o: ptoc_tag_xsb_i.h
function.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
function.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
function.o: /usr/include/stdio.h /usr/include/math.h /usr/include/errno.h
function.o: /usr/include/features.h /usr/include/stdc-predef.h
function.o: /usr/include/string.h /usr/include/strings.h auxlry.h basicdefs.h
function.o: basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
function.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
function.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h register.h
function.o: psc_xsb.h psc_defs.h incr_xsb_defs.h export.h varstring_xsb.h
function.o: memory_xsb.h memory_defs.h deref.h heap_xsb.h heap_defs_xsb.h
function.o: binding.h error_xsb.h function.h cell_xsb_i.h
hash_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
hash_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
hash_xsb.o: /usr/include/string.h /usr/include/strings.h
hash_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h
hash_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
hash_xsb.o: basictypes.h cell_def_xsb.h auxlry.h basicdefs.h context.h
hash_xsb.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h
hash_xsb.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
hash_xsb.o: celltags_xsb.h hash_xsb.h psc_xsb.h psc_defs.h incr_xsb_defs.h
hash_xsb.o: export.h flags_xsb.h memory_xsb.h memory_defs.h thread_xsb.h
hash_xsb.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
hash_xsb.o: /usr/include/sched.h /usr/include/time.h
hashtable_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
hashtable_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
hashtable_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
hashtable_xsb.o: /usr/include/alloca.h /usr/include/features.h
hashtable_xsb.o: /usr/include/stdc-predef.h /usr/include/string.h
hashtable_xsb.o: /usr/include/strings.h auxlry.h basicdefs.h basictypes.h
hashtable_xsb.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
hashtable_xsb.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
hashtable_xsb.o: box_defines.h celltags_xsb.h psc_xsb.h psc_defs.h
hashtable_xsb.o: incr_xsb_defs.h export.h cinterf.h varstring_xsb.h
hashtable_xsb.o: cinterf_defs.h trie_internals.h inst_xsb.h struct_manager.h
hashtable_xsb.o: tries.h thread_xsb.h thread_defs_xsb.h
hashtable_xsb.o: /usr/include/pthread.h /usr/include/endian.h
hashtable_xsb.o: /usr/include/sched.h /usr/include/time.h tab_structs.h
hashtable_xsb.o: debug_xsb.h table_status_defs.h slgdelay.h
hashtable_xsb.o: debugs/debug_delay.h error_xsb.h tr_utils.h flags_xsb.h
hashtable_xsb.o: memory_xsb.h memory_defs.h heap_xsb.h heap_defs_xsb.h
heap_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
heap_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
heap_xsb.o: /usr/include/string.h /usr/include/strings.h
heap_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h
heap_xsb.o: /usr/include/stdlib.h /usr/include/alloca.h /usr/include/time.h
heap_xsb.o: auxlry.h basicdefs.h basictypes.h cell_def_xsb.h context.h
heap_xsb.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h
heap_xsb.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
heap_xsb.o: celltags_xsb.h memory_xsb.h memory_defs.h export.h inst_xsb.h
heap_xsb.o: cinterf_defs.h /usr/include/stdio.h register.h psc_xsb.h
heap_xsb.o: psc_defs.h incr_xsb_defs.h varstring_xsb.h tries.h
heap_xsb.o: struct_manager.h choice.h error_xsb.h tab_structs.h debug_xsb.h
heap_xsb.o: table_status_defs.h slgdelay.h debugs/debug_delay.h realloc.h
heap_xsb.o: flags_xsb.h heap_xsb.h heap_defs_xsb.h io_builtins_xsb.h
heap_xsb.o: io_defs_xsb.h token_xsb.h token_defs_xsb.h binding.h thread_xsb.h
heap_xsb.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
heap_xsb.o: /usr/include/sched.h loader_xsb.h hash_xsb.h struct_intern.h
heap_xsb.o: cell_xsb_i.h gc_profile.h gc_mark.h gc_print.h gc_slide.h
heap_xsb.o: gc_copy.h
init_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
init_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
init_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
init_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h
init_xsb.o: /usr/include/string.h /usr/include/strings.h
init_xsb.o: /usr/include/unistd.h wind2unix.h auxlry.h basicdefs.h
init_xsb.o: basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
init_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
init_xsb.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h error_xsb.h
init_xsb.o: export.h psc_xsb.h psc_defs.h incr_xsb_defs.h inst_xsb.h
init_xsb.o: hash_xsb.h heap_xsb.h heap_defs_xsb.h memory_xsb.h memory_defs.h
init_xsb.o: register.h varstring_xsb.h tries.h struct_manager.h choice.h
init_xsb.o: flags_xsb.h loader_xsb.h extensions_xsb.h tab_structs.h
init_xsb.o: debug_xsb.h table_status_defs.h slgdelay.h debugs/debug_delay.h
init_xsb.o: tr_utils.h io_builtins_xsb.h io_defs_xsb.h token_xsb.h
init_xsb.o: token_defs_xsb.h timer_defs_xsb.h sig_xsb.h thread_xsb.h
init_xsb.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
init_xsb.o: /usr/include/sched.h /usr/include/time.h trie_internals.h
init_xsb.o: call_graph_xsb.h incr_xsb.h deadlock.h cinterf.h cinterf_defs.h
init_xsb.o: storage_xsb.h storage_xsb_defs.h orient_xsb.h trace_xsb.h
inst_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
inst_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
inst_xsb.o: auxlry.h basicdefs.h basictypes.h cell_def_xsb.h context.h
inst_xsb.o: setjmp_xsb.h /usr/include/setjmp.h /usr/include/features.h
inst_xsb.o: /usr/include/stdc-predef.h flag_defs_xsb.h hashtable_xsb.h
inst_xsb.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h inst_xsb.h
inst_xsb.o: subinst.h xsb_inst_list.h
io_builtins_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
io_builtins_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
io_builtins_xsb.o: /usr/include/unistd.h /usr/include/features.h
io_builtins_xsb.o: /usr/include/stdc-predef.h /usr/include/stdio.h
io_builtins_xsb.o: /usr/include/ctype.h /usr/include/endian.h
io_builtins_xsb.o: /usr/include/errno.h /usr/include/string.h
io_builtins_xsb.o: /usr/include/strings.h /usr/include/stdlib.h
io_builtins_xsb.o: /usr/include/alloca.h /usr/include/signal.h setjmp_xsb.h
io_builtins_xsb.o: /usr/include/setjmp.h wind2unix.h auxlry.h basicdefs.h
io_builtins_xsb.o: basictypes.h cell_def_xsb.h context.h flag_defs_xsb.h
io_builtins_xsb.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
io_builtins_xsb.o: celltags_xsb.h error_xsb.h export.h psc_xsb.h psc_defs.h
io_builtins_xsb.o: incr_xsb_defs.h cinterf.h varstring_xsb.h cinterf_defs.h
io_builtins_xsb.o: memory_xsb.h memory_defs.h heap_xsb.h heap_defs_xsb.h
io_builtins_xsb.o: register.h flags_xsb.h inst_xsb.h loader_xsb.h subp.h
io_builtins_xsb.o: tries.h struct_manager.h choice.h tab_structs.h
io_builtins_xsb.o: debug_xsb.h table_status_defs.h slgdelay.h
io_builtins_xsb.o: debugs/debug_delay.h io_builtins_xsb.h io_defs_xsb.h
io_builtins_xsb.o: token_xsb.h token_defs_xsb.h binding.h deref.h findall.h
io_builtins_xsb.o: cell_xsb_i.h ptoc_tag_xsb_i.h
loader_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
loader_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
loader_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
loader_xsb.o: /usr/include/alloca.h /usr/include/features.h
loader_xsb.o: /usr/include/stdc-predef.h /usr/include/string.h
loader_xsb.o: /usr/include/strings.h /usr/include/errno.h
loader_xsb.o: /usr/include/unistd.h auxlry.h basicdefs.h basictypes.h
loader_xsb.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
loader_xsb.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h psc_xsb.h
loader_xsb.o: psc_defs.h incr_xsb_defs.h export.h loader_xsb.h
loader_xsb.o: extensions_xsb.h cell_xsb.h box_defines.h celltags_xsb.h
loader_xsb.o: heap_xsb.h heap_defs_xsb.h flags_xsb.h tries.h struct_manager.h
loader_xsb.o: tab_structs.h debug_xsb.h table_status_defs.h slgdelay.h
loader_xsb.o: debugs/debug_delay.h error_xsb.h io_builtins_xsb.h
loader_xsb.o: io_defs_xsb.h token_xsb.h token_defs_xsb.h inst_xsb.h
loader_xsb.o: memory_xsb.h memory_defs.h register.h varstring_xsb.h
loader_xsb.o: thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
loader_xsb.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
loader_xsb.o: choice.h dynload.h cinterf.h cinterf_defs.h wind2unix.h
main_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
main_xsb.o: /usr/include/unistd.h /usr/include/features.h
main_xsb.o: /usr/include/stdc-predef.h /usr/include/fcntl.h
main_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
main_xsb.o: /usr/include/string.h /usr/include/strings.h wind2unix.h
main_xsb.o: context.h cell_def_xsb.h basictypes.h basicdefs.h setjmp_xsb.h
main_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
main_xsb.o: conc_compl.h emuloop.h export.h orient_xsb.h
memory_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
memory_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
memory_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
memory_xsb.o: /usr/include/alloca.h /usr/include/features.h
memory_xsb.o: /usr/include/stdc-predef.h /usr/include/string.h
memory_xsb.o: /usr/include/strings.h auxlry.h basicdefs.h basictypes.h
memory_xsb.o: cell_def_xsb.h binding.h box_defines.h memory_xsb.h
memory_xsb.o: memory_defs.h export.h context.h setjmp_xsb.h
memory_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
memory_xsb.o: conc_compl.h cell_xsb.h celltags_xsb.h register.h psc_xsb.h
memory_xsb.o: psc_defs.h incr_xsb_defs.h varstring_xsb.h tries.h
memory_xsb.o: struct_manager.h choice.h error_xsb.h tab_structs.h debug_xsb.h
memory_xsb.o: table_status_defs.h slgdelay.h debugs/debug_delay.h
memory_xsb.o: thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
memory_xsb.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
memory_xsb.o: flags_xsb.h subp.h trace_xsb.h cinterf.h cinterf_defs.h
orient_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
orient_xsb.o: /usr/include/unistd.h /usr/include/features.h
orient_xsb.o: /usr/include/stdc-predef.h /usr/include/fcntl.h
orient_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
orient_xsb.o: /usr/include/alloca.h /usr/include/ctype.h
orient_xsb.o: /usr/include/endian.h /usr/include/string.h
orient_xsb.o: /usr/include/strings.h wind2unix.h export.h basicdefs.h
orient_xsb.o: basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
orient_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
orient_xsb.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h
orient_xsb.o: error_xsb.h psc_xsb.h psc_defs.h incr_xsb_defs.h
orient_xsb.o: extensions_xsb.h memory_xsb.h memory_defs.h auxlry.h cinterf.h
orient_xsb.o: varstring_xsb.h cinterf_defs.h
pathname_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
pathname_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
pathname_xsb.o: /usr/include/unistd.h /usr/include/features.h
pathname_xsb.o: /usr/include/stdc-predef.h /usr/include/stdio.h
pathname_xsb.o: /usr/include/errno.h /usr/include/string.h
pathname_xsb.o: /usr/include/strings.h /usr/include/stdlib.h
pathname_xsb.o: /usr/include/alloca.h /usr/include/ctype.h
pathname_xsb.o: /usr/include/endian.h wind2unix.h export.h /usr/include/pwd.h
pathname_xsb.o: setjmp_xsb.h /usr/include/setjmp.h auxlry.h basicdefs.h
pathname_xsb.o: basictypes.h cell_def_xsb.h context.h flag_defs_xsb.h
pathname_xsb.o: hashtable_xsb.h conc_compl.h psc_xsb.h psc_defs.h
pathname_xsb.o: incr_xsb_defs.h cell_xsb.h box_defines.h celltags_xsb.h
pathname_xsb.o: cinterf.h varstring_xsb.h cinterf_defs.h error_xsb.h
pathname_xsb.o: flags_xsb.h extensions_xsb.h memory_xsb.h memory_defs.h
psc_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
psc_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
psc_xsb.o: /usr/include/stdio.h /usr/include/string.h /usr/include/strings.h
psc_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h auxlry.h
psc_xsb.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
psc_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h conc_compl.h
psc_xsb.o: cell_xsb.h box_defines.h celltags_xsb.h error_xsb.h export.h
psc_xsb.o: psc_xsb.h psc_defs.h incr_xsb_defs.h tries.h struct_manager.h
psc_xsb.o: hash_xsb.h tab_structs.h debug_xsb.h table_status_defs.h
psc_xsb.o: slgdelay.h debugs/debug_delay.h loader_xsb.h flags_xsb.h sig_xsb.h
psc_xsb.o: inst_xsb.h memory_xsb.h memory_defs.h register.h varstring_xsb.h
psc_xsb.o: thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
psc_xsb.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
psc_xsb.o: cinterf.h /usr/include/stdlib.h /usr/include/alloca.h
psc_xsb.o: cinterf_defs.h
random_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
random_xsb.o: /usr/include/alloca.h /usr/include/features.h
random_xsb.o: /usr/include/stdc-predef.h
random_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
random_xsb.o: context.h cell_def_xsb.h basictypes.h basicdefs.h setjmp_xsb.h
random_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
random_xsb.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h cinterf.h
random_xsb.o: export.h varstring_xsb.h cinterf_defs.h deref.h register.h
random_xsb.o: psc_xsb.h psc_defs.h incr_xsb_defs.h ptoc_tag_xsb_i.h binding.h
random_xsb.o: memory_xsb.h memory_defs.h error_xsb.h
remove_unf.o: /usr/include/stdio.h
remove_unf.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
remove_unf.o: basictypes.h cell_def_xsb.h context.h basicdefs.h setjmp_xsb.h
remove_unf.o: /usr/include/setjmp.h /usr/include/features.h
remove_unf.o: /usr/include/stdc-predef.h flag_defs_xsb.h hashtable_xsb.h
remove_unf.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h
remove_unf.o: error_xsb.h export.h psc_xsb.h psc_defs.h incr_xsb_defs.h
remove_unf.o: tries.h struct_manager.h tab_structs.h debug_xsb.h
remove_unf.o: table_status_defs.h slgdelay.h debugs/debug_delay.h register.h
remove_unf.o: varstring_xsb.h
residual.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
residual.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
residual.o: /usr/include/stdio.h debugs/debug_residual.h auxlry.h basicdefs.h
residual.o: basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
residual.o: /usr/include/setjmp.h /usr/include/features.h
residual.o: /usr/include/stdc-predef.h flag_defs_xsb.h hashtable_xsb.h
residual.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h memory_xsb.h
residual.o: memory_defs.h export.h psc_xsb.h psc_defs.h incr_xsb_defs.h
residual.o: register.h varstring_xsb.h heap_xsb.h heap_defs_xsb.h binding.h
residual.o: tries.h struct_manager.h tab_structs.h debug_xsb.h
residual.o: table_status_defs.h slgdelay.h debugs/debug_delay.h error_xsb.h
residual.o: io_builtins_xsb.h io_defs_xsb.h token_xsb.h token_defs_xsb.h
residual.o: flags_xsb.h
rw_lock.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
scc_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
scc_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
scc_xsb.o: /usr/include/stdio.h auxlry.h basicdefs.h basictypes.h
scc_xsb.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
scc_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h flag_defs_xsb.h
scc_xsb.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
scc_xsb.o: celltags_xsb.h register.h psc_xsb.h psc_defs.h incr_xsb_defs.h
scc_xsb.o: export.h varstring_xsb.h tries.h struct_manager.h tab_structs.h
scc_xsb.o: debug_xsb.h table_status_defs.h slgdelay.h debugs/debug_delay.h
scc_xsb.o: scc_xsb.h
slgdelay.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
slgdelay.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
slgdelay.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
slgdelay.o: /usr/include/features.h /usr/include/stdc-predef.h
slgdelay.o: /usr/include/string.h /usr/include/strings.h debugs/debug_delay.h
slgdelay.o: auxlry.h basicdefs.h basictypes.h cell_def_xsb.h context.h
slgdelay.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h
slgdelay.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
slgdelay.o: celltags_xsb.h psc_xsb.h psc_defs.h incr_xsb_defs.h export.h
slgdelay.o: register.h varstring_xsb.h trie_internals.h inst_xsb.h
slgdelay.o: struct_manager.h tries.h thread_xsb.h thread_defs_xsb.h
slgdelay.o: /usr/include/pthread.h /usr/include/endian.h /usr/include/sched.h
slgdelay.o: /usr/include/time.h memory_xsb.h memory_defs.h choice.h
slgdelay.o: tab_structs.h debug_xsb.h table_status_defs.h slgdelay.h
slgdelay.o: tr_utils.h error_xsb.h io_builtins_xsb.h io_defs_xsb.h
slgdelay.o: token_xsb.h token_defs_xsb.h flags_xsb.h dynamic_stack.h
slgdelay.o: tst_aux.h debugs/debug_tables.h debugs/debug_tries.h tables.h
slgdelay.o: tst_utils.h tables_i.h
socket_xsb.o: /usr/include/errno.h /usr/include/features.h
socket_xsb.o: /usr/include/stdc-predef.h /usr/include/stdio.h
socket_xsb.o: /usr/include/stdlib.h /usr/include/alloca.h
socket_xsb.o: /usr/include/string.h /usr/include/strings.h
socket_xsb.o: /usr/include/signal.h wind2unix.h xsb_time.h
socket_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
socket_xsb.o: /usr/include/time.h /usr/include/netdb.h
socket_xsb.o: /usr/include/netinet/in.h /usr/include/endian.h
socket_xsb.o: /usr/include/rpc/netdb.h /usr/include/arpa/inet.h
socket_xsb.o: /usr/include/unistd.h /usr/include/fcntl.h auxlry.h basicdefs.h
socket_xsb.o: basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
socket_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
socket_xsb.o: conc_compl.h
socket_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
socket_xsb.o: socket_xsb.h socket_defs_xsb.h flags_xsb.h cell_xsb.h
socket_xsb.o: box_defines.h celltags_xsb.h thread_xsb.h thread_defs_xsb.h
socket_xsb.o: export.h /usr/include/pthread.h /usr/include/sched.h
socket_xsb.o: timer_xsb.h timer_defs_xsb.h error_xsb.h psc_xsb.h psc_defs.h
socket_xsb.o: incr_xsb_defs.h cinterf.h varstring_xsb.h cinterf_defs.h
socket_xsb.o: io_builtins_xsb.h io_defs_xsb.h token_xsb.h token_defs_xsb.h
socket_xsb.o: register.h memory_xsb.h memory_defs.h
string_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
string_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
string_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
string_xsb.o: /usr/include/alloca.h /usr/include/features.h
string_xsb.o: /usr/include/stdc-predef.h /usr/include/string.h
string_xsb.o: /usr/include/strings.h auxlry.h basicdefs.h basictypes.h
string_xsb.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
string_xsb.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
string_xsb.o: box_defines.h celltags_xsb.h error_xsb.h export.h psc_xsb.h
string_xsb.o: psc_defs.h incr_xsb_defs.h hash_xsb.h tries.h struct_manager.h
string_xsb.o: choice.h deref.h memory_xsb.h memory_defs.h heap_xsb.h
string_xsb.o: heap_defs_xsb.h register.h varstring_xsb.h flags_xsb.h
string_xsb.o: binding.h builtin.h cinterf.h cinterf_defs.h sp_unify_xsb_i.h
string_xsb.o: string_xsb.h token_xsb.h token_defs_xsb.h ptoc_tag_xsb_i.h
storage_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
storage_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
storage_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
storage_xsb.o: /usr/include/alloca.h /usr/include/features.h
storage_xsb.o: /usr/include/stdc-predef.h auxlry.h basicdefs.h basictypes.h
storage_xsb.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
storage_xsb.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
storage_xsb.o: box_defines.h celltags_xsb.h psc_xsb.h psc_defs.h
storage_xsb.o: incr_xsb_defs.h export.h cinterf.h varstring_xsb.h
storage_xsb.o: cinterf_defs.h trie_internals.h inst_xsb.h struct_manager.h
storage_xsb.o: tries.h thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
storage_xsb.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
storage_xsb.o: tab_structs.h debug_xsb.h table_status_defs.h slgdelay.h
storage_xsb.o: debugs/debug_delay.h error_xsb.h tr_utils.h storage_xsb.h
storage_xsb.o: storage_xsb_defs.h flags_xsb.h
struct_manager.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
struct_manager.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
struct_manager.o: /usr/include/stdio.h /usr/include/stdlib.h
struct_manager.o: /usr/include/alloca.h /usr/include/features.h
struct_manager.o: /usr/include/stdc-predef.h auxlry.h basicdefs.h
struct_manager.o: basictypes.h cell_def_xsb.h struct_manager.h context.h
struct_manager.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h
struct_manager.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
struct_manager.o: celltags_xsb.h error_xsb.h export.h psc_xsb.h psc_defs.h
struct_manager.o: incr_xsb_defs.h tries.h debug_xsb.h flags_xsb.h
struct_manager.o: memory_xsb.h memory_defs.h
sub_delete.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
sub_delete.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
sub_delete.o: /usr/include/stdio.h /usr/include/stdlib.h
sub_delete.o: /usr/include/alloca.h /usr/include/features.h
sub_delete.o: /usr/include/stdc-predef.h auxlry.h basicdefs.h basictypes.h
sub_delete.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
sub_delete.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
sub_delete.o: box_defines.h celltags_xsb.h psc_xsb.h psc_defs.h
sub_delete.o: incr_xsb_defs.h export.h trie_internals.h inst_xsb.h
sub_delete.o: struct_manager.h tries.h thread_xsb.h thread_defs_xsb.h
sub_delete.o: /usr/include/pthread.h /usr/include/endian.h
sub_delete.o: /usr/include/sched.h /usr/include/time.h tab_structs.h
sub_delete.o: debug_xsb.h table_status_defs.h slgdelay.h debugs/debug_delay.h
sub_delete.o: error_xsb.h memory_xsb.h memory_defs.h tr_utils.h
subp.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
subp.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
subp.o: debugs/debug_attv.h /usr/include/stdio.h /usr/include/signal.h
subp.o: /usr/include/features.h /usr/include/stdc-predef.h
subp.o: /usr/include/string.h /usr/include/strings.h /usr/include/pthread.h
subp.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
subp.o: /usr/include/unistd.h auxlry.h basicdefs.h basictypes.h
subp.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
subp.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
subp.o: celltags_xsb.h psc_xsb.h psc_defs.h incr_xsb_defs.h export.h tries.h
subp.o: struct_manager.h debug_xsb.h error_xsb.h memory_xsb.h memory_defs.h
subp.o: register.h varstring_xsb.h heap_xsb.h heap_defs_xsb.h deref.h
subp.o: flags_xsb.h binding.h trie_internals.h inst_xsb.h thread_xsb.h
subp.o: thread_defs_xsb.h trassert.h choice.h token_xsb.h token_defs_xsb.h
subp.o: sig_xsb.h tab_structs.h table_status_defs.h slgdelay.h
subp.o: debugs/debug_delay.h table_stats.h unify_xsb.h subp.h hash_xsb.h
subp.o: trace_xsb.h tr_utils.h system_defs_xsb.h builtin.h struct_intern.h
subp.o: cell_xsb_i.h
system_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
system_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
system_xsb.o: /usr/include/alloca.h /usr/include/features.h
system_xsb.o: /usr/include/stdc-predef.h /usr/include/signal.h
system_xsb.o: /usr/include/string.h /usr/include/strings.h
system_xsb.o: /usr/include/errno.h /usr/include/ctype.h /usr/include/endian.h
system_xsb.o: /usr/include/time.h /usr/include/unistd.h /usr/include/dirent.h
system_xsb.o: /usr/include/fcntl.h auxlry.h basicdefs.h basictypes.h
system_xsb.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
system_xsb.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
system_xsb.o: box_defines.h celltags_xsb.h error_xsb.h export.h psc_xsb.h
system_xsb.o: psc_defs.h incr_xsb_defs.h cinterf.h varstring_xsb.h
system_xsb.o: cinterf_defs.h syscall_xsb.h io_builtins_xsb.h io_defs_xsb.h
system_xsb.o: token_xsb.h token_defs_xsb.h flags_xsb.h wind2unix.h
system_xsb.o: system_xsb.h system_defs_xsb.h register.h memory_xsb.h
system_xsb.o: memory_defs.h thread_defs_xsb.h thread_xsb.h
system_xsb.o: /usr/include/pthread.h /usr/include/sched.h
table_stats.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
table_stats.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
table_stats.o: /usr/include/stdio.h auxlry.h basicdefs.h basictypes.h
table_stats.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
table_stats.o: /usr/include/features.h /usr/include/stdc-predef.h
table_stats.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
table_stats.o: box_defines.h celltags_xsb.h psc_xsb.h psc_defs.h
table_stats.o: incr_xsb_defs.h export.h table_stats.h struct_manager.h
table_stats.o: trie_internals.h inst_xsb.h tries.h thread_xsb.h
table_stats.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
table_stats.o: /usr/include/sched.h /usr/include/time.h tab_structs.h
table_stats.o: debug_xsb.h table_status_defs.h slgdelay.h
table_stats.o: debugs/debug_delay.h error_xsb.h flags_xsb.h memory_xsb.h
table_stats.o: memory_defs.h call_graph_xsb.h
tables.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
tables.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
tables.o: debugs/debug_tables.h debugs/debug_delay.h /usr/include/stdio.h
tables.o: /usr/include/stdlib.h /usr/include/alloca.h /usr/include/features.h
tables.o: /usr/include/stdc-predef.h /usr/include/string.h
tables.o: /usr/include/strings.h auxlry.h basicdefs.h basictypes.h
tables.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
tables.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
tables.o: box_defines.h celltags_xsb.h heap_xsb.h heap_defs_xsb.h
tables.o: memory_xsb.h memory_defs.h export.h register.h psc_xsb.h psc_defs.h
tables.o: incr_xsb_defs.h varstring_xsb.h binding.h table_stats.h
tables.o: struct_manager.h trie_internals.h inst_xsb.h tries.h thread_xsb.h
tables.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
tables.o: /usr/include/sched.h /usr/include/time.h tab_structs.h debug_xsb.h
tables.o: table_status_defs.h slgdelay.h error_xsb.h flags_xsb.h tst_utils.h
tables.o: dynamic_stack.h loader_xsb.h tables.h cinterf.h cinterf_defs.h
tables.o: sub_tables_xsb_i.h tst_aux.h debugs/debug_tries.h deref.h
tables.o: call_graph_xsb.h tr_utils.h choice.h
thread_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
thread_xsb.o: /usr/include/alloca.h /usr/include/features.h
thread_xsb.o: /usr/include/stdc-predef.h /usr/include/time.h
thread_xsb.o: /usr/include/math.h /usr/include/signal.h /usr/include/string.h
thread_xsb.o: /usr/include/strings.h
thread_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
thread_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
thread_xsb.o: /usr/include/unistd.h basictypes.h cell_def_xsb.h basicdefs.h
thread_xsb.o: auxlry.h context.h setjmp_xsb.h /usr/include/setjmp.h
thread_xsb.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
thread_xsb.o: box_defines.h celltags_xsb.h register.h psc_xsb.h psc_defs.h
thread_xsb.o: incr_xsb_defs.h export.h varstring_xsb.h cinterf.h
thread_xsb.o: cinterf_defs.h error_xsb.h flags_xsb.h io_defs_xsb.h
thread_xsb.o: io_builtins_xsb.h token_xsb.h token_defs_xsb.h deref.h
thread_xsb.o: ptoc_tag_xsb_i.h binding.h memory_xsb.h memory_defs.h
thread_xsb.o: thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
thread_xsb.o: /usr/include/endian.h /usr/include/sched.h rw_lock.h sig_xsb.h
thread_xsb.o: loader_xsb.h heap_xsb.h heap_defs_xsb.h
timer_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
timer_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
timer_xsb.o: /usr/include/stdlib.h /usr/include/alloca.h
timer_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h
timer_xsb.o: /usr/include/signal.h /usr/include/unistd.h /usr/include/errno.h
timer_xsb.o: /usr/include/stdio.h xsb_time.h /usr/include/time.h context.h
timer_xsb.o: cell_def_xsb.h basictypes.h basicdefs.h setjmp_xsb.h
timer_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
timer_xsb.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h error_xsb.h
timer_xsb.o: export.h psc_xsb.h psc_defs.h incr_xsb_defs.h timer_xsb.h
timer_xsb.o: timer_defs_xsb.h thread_xsb.h thread_defs_xsb.h
timer_xsb.o: /usr/include/pthread.h /usr/include/endian.h
timer_xsb.o: /usr/include/sched.h
token_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
token_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
token_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h
token_xsb.o: /usr/include/errno.h /usr/include/string.h
token_xsb.o: /usr/include/strings.h /usr/include/math.h auxlry.h basicdefs.h
token_xsb.o: basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
token_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
token_xsb.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h token_xsb.h
token_xsb.o: token_defs_xsb.h flags_xsb.h psc_xsb.h psc_defs.h
token_xsb.o: incr_xsb_defs.h export.h subp.h register.h varstring_xsb.h
token_xsb.o: error_xsb.h memory_xsb.h memory_defs.h io_builtins_xsb.h
token_xsb.o: io_defs_xsb.h cinterf.h cinterf_defs.h sig_xsb.h
tr_utils.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
tr_utils.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
tr_utils.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
tr_utils.o: /usr/include/features.h /usr/include/stdc-predef.h
tr_utils.o: /usr/include/string.h /usr/include/strings.h debugs/debug_tries.h
tr_utils.o: auxlry.h basicdefs.h basictypes.h cell_def_xsb.h context.h
tr_utils.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h
tr_utils.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
tr_utils.o: celltags_xsb.h cinterf.h export.h varstring_xsb.h cinterf_defs.h
tr_utils.o: binding.h memory_xsb.h memory_defs.h psc_xsb.h psc_defs.h
tr_utils.o: incr_xsb_defs.h heap_xsb.h heap_defs_xsb.h register.h deref.h
tr_utils.o: flags_xsb.h trie_internals.h inst_xsb.h struct_manager.h tries.h
tr_utils.o: thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
tr_utils.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
tr_utils.o: tst_aux.h debugs/debug_tables.h dynamic_stack.h tab_structs.h
tr_utils.o: debug_xsb.h table_status_defs.h slgdelay.h debugs/debug_delay.h
tr_utils.o: sw_envs.h choice.h cut_xsb.h error_xsb.h io_builtins_xsb.h
tr_utils.o: io_defs_xsb.h token_xsb.h token_defs_xsb.h tr_utils.h tst_utils.h
tr_utils.o: subp.h rw_lock.h storage_xsb.h storage_xsb_defs.h hash_xsb.h
tr_utils.o: tables.h builtin.h trie_defs.h trassert.h biassert_defs.h
tr_utils.o: call_graph_xsb.h table_inspection_defs.h residual.h hashtable.h
tr_utils.o: hashtable_itr.h ptoc_tag_xsb_i.h term_psc_xsb_i.h tr_code_xsb_i.h
trace_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
trace_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
trace_xsb.o: /usr/include/stdio.h auxlry.h basicdefs.h basictypes.h
trace_xsb.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
trace_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h
trace_xsb.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
trace_xsb.o: box_defines.h celltags_xsb.h inst_xsb.h memory_xsb.h
trace_xsb.o: memory_defs.h export.h register.h psc_xsb.h psc_defs.h
trace_xsb.o: incr_xsb_defs.h varstring_xsb.h table_stats.h struct_manager.h
trace_xsb.o: trie_internals.h tries.h thread_xsb.h thread_defs_xsb.h
trace_xsb.o: /usr/include/pthread.h /usr/include/endian.h
trace_xsb.o: /usr/include/sched.h /usr/include/time.h tab_structs.h
trace_xsb.o: debug_xsb.h table_status_defs.h slgdelay.h debugs/debug_delay.h
trace_xsb.o: choice.h flags_xsb.h heap_xsb.h heap_defs_xsb.h trace_xsb.h
trace_xsb.o: deadlock.h cinterf.h /usr/include/stdlib.h /usr/include/alloca.h
trace_xsb.o: cinterf_defs.h system_defs_xsb.h subp.h error_xsb.h tr_utils.h
trace_xsb.o: loader_xsb.h call_graph_xsb.h hash_xsb.h
trie_lookup.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
trie_lookup.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
trie_lookup.o: debugs/debug_tries.h /usr/include/stdio.h
trie_lookup.o: /usr/include/stdlib.h /usr/include/alloca.h
trie_lookup.o: /usr/include/features.h /usr/include/stdc-predef.h auxlry.h
trie_lookup.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
trie_lookup.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
trie_lookup.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h
trie_lookup.o: error_xsb.h export.h psc_xsb.h psc_defs.h incr_xsb_defs.h
trie_lookup.o: deref.h table_stats.h struct_manager.h trie_internals.h
trie_lookup.o: inst_xsb.h tries.h thread_xsb.h thread_defs_xsb.h
trie_lookup.o: /usr/include/pthread.h /usr/include/endian.h
trie_lookup.o: /usr/include/sched.h /usr/include/time.h tst_aux.h
trie_lookup.o: debugs/debug_tables.h dynamic_stack.h subp.h debug_xsb.h
trie_lookup.o: flags_xsb.h memory_xsb.h memory_defs.h
trie_search.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
trie_search.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
trie_search.o: debugs/debug_tries.h /usr/include/stdio.h
trie_search.o: /usr/include/stdlib.h /usr/include/alloca.h
trie_search.o: /usr/include/features.h /usr/include/stdc-predef.h auxlry.h
trie_search.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
trie_search.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
trie_search.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h
trie_search.o: error_xsb.h export.h psc_xsb.h psc_defs.h incr_xsb_defs.h
trie_search.o: deref.h trie_internals.h inst_xsb.h struct_manager.h tries.h
trie_search.o: thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
trie_search.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
trie_search.o: tst_aux.h debugs/debug_tables.h dynamic_stack.h debug_xsb.h
trie_search.o: flags_xsb.h
tries.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
tries.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
tries.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
tries.o: /usr/include/features.h /usr/include/stdc-predef.h
tries.o: /usr/include/string.h /usr/include/strings.h debugs/debug_tries.h
tries.o: auxlry.h basicdefs.h basictypes.h cell_def_xsb.h context.h
tries.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
tries.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h inst_xsb.h
tries.o: psc_xsb.h psc_defs.h incr_xsb_defs.h export.h heap_xsb.h
tries.o: heap_defs_xsb.h flags_xsb.h deref.h memory_xsb.h memory_defs.h
tries.o: register.h varstring_xsb.h binding.h trie_internals.h
tries.o: struct_manager.h tries.h thread_xsb.h thread_defs_xsb.h
tries.o: /usr/include/pthread.h /usr/include/endian.h /usr/include/sched.h
tries.o: /usr/include/time.h tab_structs.h debug_xsb.h table_status_defs.h
tries.o: slgdelay.h debugs/debug_delay.h choice.h cinterf.h cinterf_defs.h
tries.o: error_xsb.h tr_utils.h rw_lock.h subp.h call_graph_xsb.h
tries.o: biassert_defs.h loader_xsb.h struct_intern.h residual.h
tries.o: term_psc_xsb_i.h ptoc_tag_xsb_i.h
tst_insert.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
tst_insert.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
tst_insert.o: /usr/include/stdio.h /usr/include/stdlib.h
tst_insert.o: /usr/include/alloca.h /usr/include/features.h
tst_insert.o: /usr/include/stdc-predef.h debugs/debug_tries.h auxlry.h
tst_insert.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
tst_insert.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
tst_insert.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h inst_xsb.h
tst_insert.o: register.h psc_xsb.h psc_defs.h incr_xsb_defs.h export.h
tst_insert.o: varstring_xsb.h error_xsb.h deref.h table_stats.h
tst_insert.o: struct_manager.h trie_internals.h tries.h thread_xsb.h
tst_insert.o: thread_defs_xsb.h /usr/include/pthread.h /usr/include/endian.h
tst_insert.o: /usr/include/sched.h /usr/include/time.h tst_aux.h
tst_insert.o: debugs/debug_tables.h dynamic_stack.h memory_xsb.h
tst_insert.o: memory_defs.h struct_intern.h
tst_retrv.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
tst_retrv.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
tst_retrv.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
tst_retrv.o: /usr/include/features.h /usr/include/stdc-predef.h auxlry.h
tst_retrv.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
tst_retrv.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
tst_retrv.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h inst_xsb.h
tst_retrv.o: register.h psc_xsb.h psc_defs.h incr_xsb_defs.h export.h
tst_retrv.o: varstring_xsb.h memory_xsb.h memory_defs.h error_xsb.h deref.h
tst_retrv.o: binding.h sw_envs.h subp.h table_stats.h struct_manager.h
tst_retrv.o: trie_internals.h tries.h thread_xsb.h thread_defs_xsb.h
tst_retrv.o: /usr/include/pthread.h /usr/include/endian.h
tst_retrv.o: /usr/include/sched.h /usr/include/time.h choice.h tab_structs.h
tst_retrv.o: debug_xsb.h table_status_defs.h slgdelay.h debugs/debug_delay.h
tst_retrv.o: cut_xsb.h tst_aux.h debugs/debug_tables.h debugs/debug_tries.h
tst_retrv.o: dynamic_stack.h tst_utils.h flags_xsb.h
tst_unify.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
tst_unify.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
tst_unify.o: /usr/include/stdio.h auxlry.h basicdefs.h basictypes.h
tst_unify.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
tst_unify.o: /usr/include/features.h /usr/include/stdc-predef.h
tst_unify.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
tst_unify.o: box_defines.h celltags_xsb.h register.h psc_xsb.h psc_defs.h
tst_unify.o: incr_xsb_defs.h export.h varstring_xsb.h memory_xsb.h
tst_unify.o: memory_defs.h binding.h deref.h subp.h table_stats.h
tst_unify.o: struct_manager.h trie_internals.h inst_xsb.h tries.h
tst_unify.o: thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
tst_unify.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
tst_unify.o: tab_structs.h debug_xsb.h table_status_defs.h slgdelay.h
tst_unify.o: debugs/debug_delay.h choice.h tst_aux.h debugs/debug_tables.h
tst_unify.o: debugs/debug_tries.h dynamic_stack.h tst_utils.h error_xsb.h
tst_utils.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
tst_utils.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
tst_utils.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
tst_utils.o: /usr/include/features.h /usr/include/stdc-predef.h auxlry.h
tst_utils.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
tst_utils.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
tst_utils.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h binding.h
tst_utils.o: memory_xsb.h memory_defs.h export.h psc_xsb.h psc_defs.h
tst_utils.o: incr_xsb_defs.h register.h varstring_xsb.h deref.h
tst_utils.o: trie_internals.h inst_xsb.h struct_manager.h tries.h
tst_utils.o: thread_xsb.h thread_defs_xsb.h /usr/include/pthread.h
tst_utils.o: /usr/include/endian.h /usr/include/sched.h /usr/include/time.h
tst_utils.o: tst_aux.h debugs/debug_tables.h debugs/debug_tries.h
tst_utils.o: dynamic_stack.h tab_structs.h debug_xsb.h table_status_defs.h
tst_utils.o: slgdelay.h debugs/debug_delay.h choice.h error_xsb.h
tst_utils.o: cell_xsb_i.h
varstring.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
varstring.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
varstring.o: /usr/include/features.h /usr/include/stdc-predef.h
varstring.o: /usr/include/errno.h /usr/include/string.h
varstring.o: /usr/include/strings.h wind2unix.h auxlry.h basicdefs.h
varstring.o: basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
varstring.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
varstring.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h
varstring.o: memory_xsb.h memory_defs.h export.h error_xsb.h psc_xsb.h
varstring.o: psc_defs.h incr_xsb_defs.h varstring_xsb.h
ubi_BinTree.o: ubi_BinTree.h sys_include.h /usr/include/stdlib.h
ubi_BinTree.o: /usr/include/alloca.h /usr/include/features.h
ubi_BinTree.o: /usr/include/stdc-predef.h /usr/include/stdio.h
ubi_BinTree.o: /usr/include/locale.h
ubi_BinTree.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
ubi_BinTree.o: auxlry.h basicdefs.h basictypes.h cell_def_xsb.h context.h
ubi_BinTree.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h
ubi_BinTree.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
ubi_BinTree.o: celltags_xsb.h psc_xsb.h psc_defs.h incr_xsb_defs.h export.h
ubi_SplayTree.o: ubi_SplayTree.h ubi_BinTree.h sys_include.h
ubi_SplayTree.o: /usr/include/stdlib.h /usr/include/alloca.h
ubi_SplayTree.o: /usr/include/features.h /usr/include/stdc-predef.h
ubi_SplayTree.o: /usr/include/stdio.h /usr/include/locale.h
ubi_SplayTree.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
ubi_SplayTree.o: auxlry.h basicdefs.h basictypes.h cell_def_xsb.h context.h
ubi_SplayTree.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h
ubi_SplayTree.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
ubi_SplayTree.o: celltags_xsb.h psc_xsb.h psc_defs.h incr_xsb_defs.h export.h
hashtable.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
hashtable.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
hashtable.o: /usr/include/stdlib.h /usr/include/alloca.h
hashtable.o: /usr/include/features.h /usr/include/stdc-predef.h
hashtable.o: /usr/include/stdio.h /usr/include/string.h
hashtable.o: /usr/include/strings.h /usr/include/math.h hashtable.h
hashtable.o: hashtable_private.h auxlry.h basicdefs.h basictypes.h
hashtable.o: cell_def_xsb.h memory_xsb.h memory_defs.h export.h
hashtable_itr.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
hashtable_itr.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
hashtable_itr.o: /usr/include/stdlib.h /usr/include/alloca.h
hashtable_itr.o: /usr/include/features.h /usr/include/stdc-predef.h
hashtable_itr.o: hashtable.h hashtable_private.h hashtable_itr.h auxlry.h
hashtable_itr.o: basicdefs.h basictypes.h cell_def_xsb.h memory_xsb.h
hashtable_itr.o: memory_defs.h export.h
sha1.o: sha1.h
sha1.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
sha1.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
sha1.o: /usr/include/features.h /usr/include/stdc-predef.h
sha1.o: /usr/include/string.h /usr/include/strings.h /usr/include/errno.h
sha1.o: /usr/include/unistd.h auxlry.h basicdefs.h basictypes.h
sha1.o: cell_def_xsb.h cell_xsb.h box_defines.h celltags_xsb.h error_xsb.h
sha1.o: setjmp_xsb.h /usr/include/setjmp.h export.h context.h flag_defs_xsb.h
sha1.o: hashtable_xsb.h conc_compl.h psc_xsb.h psc_defs.h incr_xsb_defs.h
sha1.o: builtin.h cinterf.h varstring_xsb.h cinterf_defs.h
md5.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
md5.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
md5.o: /usr/include/features.h /usr/include/stdc-predef.h
md5.o: /usr/include/string.h /usr/include/strings.h /usr/include/errno.h
md5.o: /usr/include/unistd.h auxlry.h basicdefs.h basictypes.h cell_def_xsb.h
md5.o: cell_xsb.h box_defines.h celltags_xsb.h error_xsb.h setjmp_xsb.h
md5.o: /usr/include/setjmp.h export.h context.h flag_defs_xsb.h
md5.o: hashtable_xsb.h conc_compl.h psc_xsb.h psc_defs.h incr_xsb_defs.h
md5.o: builtin.h cinterf.h varstring_xsb.h cinterf_defs.h
url_encode.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
url_encode.o: /usr/include/string.h /usr/include/strings.h
url_encode.o: /usr/include/features.h /usr/include/stdc-predef.h
url_encode.o: /usr/include/stdlib.h /usr/include/alloca.h
url_encode.o: /usr/include/stdio.h /usr/include/ctype.h /usr/include/endian.h
url_encode.o: auxlry.h basicdefs.h basictypes.h cell_def_xsb.h context.h
url_encode.o: setjmp_xsb.h /usr/include/setjmp.h flag_defs_xsb.h
url_encode.o: hashtable_xsb.h conc_compl.h cell_xsb.h box_defines.h
url_encode.o: celltags_xsb.h error_xsb.h export.h psc_xsb.h psc_defs.h
url_encode.o: incr_xsb_defs.h cinterf.h varstring_xsb.h cinterf_defs.h
url_encode.o: memory_xsb.h memory_defs.h
getMemorySize.o: /usr/include/unistd.h /usr/include/features.h
getMemorySize.o: /usr/include/stdc-predef.h
incr_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
incr_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
incr_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h /usr/include/alloca.h
incr_xsb.o: /usr/include/features.h /usr/include/stdc-predef.h auxlry.h
incr_xsb.o: basicdefs.h basictypes.h cell_def_xsb.h context.h setjmp_xsb.h
incr_xsb.o: /usr/include/setjmp.h flag_defs_xsb.h hashtable_xsb.h
incr_xsb.o: conc_compl.h cell_xsb.h box_defines.h celltags_xsb.h psc_xsb.h
incr_xsb.o: psc_defs.h incr_xsb_defs.h export.h cinterf.h varstring_xsb.h
incr_xsb.o: cinterf_defs.h deref.h memory_xsb.h memory_defs.h heap_xsb.h
incr_xsb.o: heap_defs_xsb.h register.h tries.h struct_manager.h
incr_xsb.o: trie_internals.h inst_xsb.h thread_xsb.h thread_defs_xsb.h
incr_xsb.o: /usr/include/pthread.h /usr/include/endian.h /usr/include/sched.h
incr_xsb.o: /usr/include/time.h tab_structs.h debug_xsb.h table_status_defs.h
incr_xsb.o: slgdelay.h debugs/debug_delay.h choice.h subp.h error_xsb.h
incr_xsb.o: tr_utils.h incr_xsb.h flags_xsb.h ptoc_tag_xsb_i.h binding.h
incr_xsb.o: call_graph_xsb.h term_psc_xsb_i.h rw_lock.h token_xsb.h
incr_xsb.o: token_defs_xsb.h tst_utils.h dynamic_stack.h hashtable.h
incr_xsb.o: hashtable_itr.h
call_graph_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_config.h
call_graph_xsb.o: /home/quantumech/Desktop/XSB_Port/XSB/config/x86_64-unknown-linux-gnu/xsb_debug.h
call_graph_xsb.o: /usr/include/stdio.h /usr/include/stdlib.h
call_graph_xsb.o: /usr/include/alloca.h /usr/include/features.h
call_graph_xsb.o: /usr/include/stdc-predef.h /usr/include/string.h
call_graph_xsb.o: /usr/include/strings.h hashtable.h hashtable_itr.h
call_graph_xsb.o: debugs/debug_tries.h auxlry.h basicdefs.h basictypes.h
call_graph_xsb.o: cell_def_xsb.h context.h setjmp_xsb.h /usr/include/setjmp.h
call_graph_xsb.o: flag_defs_xsb.h hashtable_xsb.h conc_compl.h cell_xsb.h
call_graph_xsb.o: box_defines.h celltags_xsb.h inst_xsb.h psc_xsb.h
call_graph_xsb.o: psc_defs.h incr_xsb_defs.h export.h heap_xsb.h
call_graph_xsb.o: heap_defs_xsb.h flags_xsb.h deref.h memory_xsb.h
call_graph_xsb.o: memory_defs.h register.h varstring_xsb.h binding.h
call_graph_xsb.o: trie_internals.h struct_manager.h tries.h thread_xsb.h
call_graph_xsb.o: thread_defs_xsb.h /usr/include/pthread.h
call_graph_xsb.o: /usr/include/endian.h /usr/include/sched.h
call_graph_xsb.o: /usr/include/time.h tab_structs.h debug_xsb.h
call_graph_xsb.o: table_status_defs.h slgdelay.h debugs/debug_delay.h
call_graph_xsb.o: choice.h subp.h cinterf.h cinterf_defs.h error_xsb.h
call_graph_xsb.o: tr_utils.h hash_xsb.h tst_aux.h debugs/debug_tables.h
call_graph_xsb.o: dynamic_stack.h tst_utils.h token_xsb.h token_defs_xsb.h
call_graph_xsb.o: call_graph_xsb.h loader_xsb.h
