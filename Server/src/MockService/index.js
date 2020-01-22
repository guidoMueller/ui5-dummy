import Employees from './Routes/Employees'
import path from "path"

let index = function( oApp ) {
  Employees(oApp);

  oApp.get( '/odata/service.svc', function( req, res ) {
    res.sendFile( path.join( __dirname, 'service.xml' ) );
  } );

  oApp.get( '/odata/service.svc/([\\$])metadata', function( req, res ) {
    res.sendFile( path.join( __dirname, 'metadata.xml' ) );
  } );
}

export default index
