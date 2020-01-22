'use strict';

import path from "path"

let routes = function( oApp ) {
	oApp.get( '/', function( req, res ) {
		if ( req.user !== null && req.user !== undefined ) {
			res.sendFile( path.join( __dirname, '../../../App/build/com/bpw/complaints', 'index.html' ) );
		} else {
			res.sendFile( path.join( __dirname, '../../../App/build/com/bpw/complaints', 'index.html' ) );
		}
	} );
}

export default routes

