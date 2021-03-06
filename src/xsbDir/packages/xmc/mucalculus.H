/* File:      mucalculus.H
** Author(s): C.R. Ramakrishnan
** Contact:   lmc@cs.sunysb.edu
** 
** Copyright (C) SUNY at Stony Brook, 1998-2000
** 
** XMC is free software; you can redistribute it and/or modify it under the
** terms of the GNU Library General Public License as published by the Free
** Software Foundation; either version 2 of the License, or (at your option)
** any later version.
** 
** XMC is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
** FOR A PARTICULAR PURPOSE.  See the GNU Library General Public License for
** more details.
** 
** You should have received a copy of the GNU Library General Public License
** along with XMC; if not, write to the Free Software Foundation,
** Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
**
** $Id: mucalculus.H,v 1.4 2010-08-19 15:03:39 spyrosh Exp $
** 
*/


%:- export models/2, rec_models/2.
%:- export start/2, transition/3.

%:- import member/2 from basics.
%:- import 't not'/1 from tables.
:- import sk_not/1 from tables.

:- import fDef/2 from usermod.
:- import trans/3 from usermod.
:- import startstate/2 from usermod.
