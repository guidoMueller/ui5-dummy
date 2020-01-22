import express from "express"
import bodyParser from "body-parser"
import routes from "./routes/routes.js"
import path from "path";
import MockService from './MockService'

const app = express();
// body parser middleware to handle URL parameter and JSON bodies
app.use( bodyParser.urlencoded( {extended: false} ) );
app.use( bodyParser.json() );

// add & configure middleware

// client express routes
routes( app );
MockService(app);

let server
app.use( "/node_modules", function( req, res ) {
	console.log(req.originalUrl)
	res.sendFile( path.join( __dirname, '../../', req.originalUrl ) );
} );

app.use( "/node_modules", function( req, res ) {
  console.log(req.originalUrl)
  res.sendFile( path.join( __dirname, '../../', req.originalUrl ) );
} );
app.use( "/static/", function( req, res ) {
	console.log(req.originalUrl)
	res.sendFile( path.join( __dirname, '../../App/build/', req.originalUrl.replace("/static", "") ) );
} );

server = app.listen( process.env.PORT || 3000 );


