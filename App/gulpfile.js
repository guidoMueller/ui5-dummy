const babel = require( "gulp-babel" );
const concat = require( "gulp-concat" );
const del = require( "del" );
const express = require( "express" );
const gulp = require( "gulp" );
const less = require( "gulp-less" );
const minifyCss = require( "gulp-minify-css" );
const rename = require( "gulp-rename" );
const runSequence = require( "run-sequence" );
const uglify = require( "gulp-uglify" );
const ui5Lib = require( "gulp-ui5-lib" );
const watch = require( "gulp-watch" );
const ui5preload = require( 'gulp-ui5-preload' );
const lazypipe = require( 'lazypipe' );
const gulpif = require( 'gulp-if' );
const prettydata = require( 'gulp-pretty-data' );
const gutil = require( 'gulp-util' );
const plumber = require( 'gulp-plumber' );
const exec = require( 'child_process' ).exec;
const open = require( 'gulp-open' );
const nodemon = require( 'gulp-nodemon' );
const browserSync = require('browser-sync');
const server = browserSync.create();

const SRC_ROOT = "./src";
const ASSETS_ROOT = "./build";
const MODULES = [
  {path: "com/bpw/complaints", namespace: "com/bpw/complaints"}];

MODULES.forEach( module => {
  // See generateBuildModuleTask(modul) bellow
  generateBuildModuleTask( module );
  generateBuildDevModuleTask( module );
} );
var onError = function( err ) {
  gutil.log( err.toString() );
  this.emit( 'end' );
};

gulp.task( 'server:start', function( done ) {
  var stream = nodemon( {
                          script: '../Server/build/server.js',
                          ext: 'js html',
                          done: done
                        } );
  server.init({
                proxy: "localhost:3000",
                port: 5000,
                files: [
                  `${SRC_ROOT}/${module.path}/**/**/**.+(json|xml|html|properties|css|js|less)`
                ],
                browser: 'google chrome',
                notify: false
              });
  stream
		.on( 'start', function() {

		} )
    .on( 'restart', function() {
      console.log( 'restarted!' )
      server.reload();
    } )
    .on( 'crash', function() {
      console.error( 'Application has crashed!\n' )
      stream.emit( 'restart', 10 )  // restart the server in 10 seconds
    } )
} )

gulp.task( 'server:watch', function( cb ) {
  exec( `babel --watch -d ./../Server/build/ ./../Server/src/`, function( err, stdout, stderr ) {
    console.log( stdout );
    console.log( stderr );
    cb( err );
  } );
} )

gulp.task( "default", ["build"] );

gulp.task( "clean", cb => {
  del( `${ASSETS_ROOT}/com/bpw/complaints` ).then( () => {
    cb();
  }, reason => {
    cb( reason );
  } );
} );

gulp.task( "build", ["clean"], cb => {
  // Let's build modules one by one,
  const params = MODULES.map( module => `build:${module.path}` );

  // Don't forget our callback.
  params.push( cb );

  // Execute the workflow.
  runSequence.apply( this, params );
} );

gulp.task( "dev", ["clean"], cb => {
  // Let's build modules one by one,
  const params = MODULES.map( module => `build-dev:${module.path}` );

  // Don't forget our callback.
  params.push( cb );

  // Execute the workflow.
  runSequence.apply( this, params );
} );


function generateBuildModuleTask( module ) {
  gulp.task( `build:${module.path}`, cb => {
    runSequence(
      [
        `build-less:${module.path}`,
        `build-js:${module.path}`,
      ],
      `copyFile:${module.path}`,
      `ui5preload:${module.path}`,
      `build-library:${module.path}`,
      cb
    );
  } );

  gulp.task( `build-js:${module.path}`, () => {
    return gulp.src( `${SRC_ROOT}/${module.path}/**/*.js` )
      .pipe( babel() )
      .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
  } );

  gulp.task( `build-less:${module.path}`, () => {
    const sourceFiles = `${SRC_ROOT}/${module.path}/**/**/**/**.+(less)`;
    return gulp.src( sourceFiles )
      .pipe( less() )
      .pipe( minifyCss() )
      .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
  } );

  gulp.task( `build-library:${module.path}`, () => {
    return gulp.src( `${ASSETS_ROOT}/${module.path}/**/*.+(js)` )
      .pipe( uglify() )
      .pipe( ui5Lib( `${module.path}` ) )
      .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
  } );

  gulp.task( `ui5preload:${module.path}`, function() {
    return gulp.src( [
                       `${ASSETS_ROOT}/${module.path}/**/**/**.+(js|xml)`,
                     ] )

      .pipe( plumber( {
                        errorHandler: onError
                      } ) )
      .pipe( ui5preload( {base: `${SRC_ROOT}/${module.path}`, namespace: 'com.bpw.complaints'} ) )
      .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
  } );


  gulp.task( `copyFile:${module.path}`, function() {
    return gulp.src( [
                       `${SRC_ROOT}/${module.path}/**/**/**.+(json|xml|html|properties|css)`,
                     ] )

      .pipe( plumber( {
                        errorHandler: onError
                      } ) )
      .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
  } )
}

function generateBuildDevModuleTask( module ) {
  gulp.task( `build-dev:${module.path}`, cb => {
    runSequence(
      [
        `server:start`,
        `build-less:${module.path}`,
        `watch-less:${module.path}`,
        `build-dev-js:${module.path}`,
        `build-watch-dev-js:${module.path}`,
        `ui5preload-dev:${module.path}`,
        `ui5preload-watch-dev:${module.path}`,
        `copyFile-dev:${module.path}`,
        `copyFileWatch-dev:${module.path}`
      ],
      cb
    );
  } );

  gulp.task( `open`, function() {
    const sourceFiles = `./build/${module.path}/index.html`;
    console.log( "----------open--------------", sourceFiles )
    gulp.src( sourceFiles )
      .pipe( open( {uri: 'localhost:3000', app: 'google-chrome'} ) );
  } );

  gulp.task( `build-dev-js:${module.path}`, () => {
    const sourceFiles = `${SRC_ROOT}/${module.path}/**/*.js`;
    return gulp.src( sourceFiles )
      .pipe( watch( sourceFiles ) )
      .pipe( babel( {sourceMaps: "inline"} ) )
      .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
  } );

  gulp.task( `build-watch-dev-js:${module.path}`, () => {
    const sourceFiles = `${SRC_ROOT}/${module.path}/**/*.js`;
    return watch( sourceFiles, function() {
      gulp.src( sourceFiles )
        .pipe( watch( sourceFiles ) )
        .pipe( babel( {sourceMaps: "inline"} ) )
        .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
    } );
  } );


  gulp.task( `ui5preload-dev:${module.path}`, function() {
    const sourceFiles = `${ASSETS_ROOT}/${module.path}/**/**.+(xml)`;
    return gulp.src( [
                       sourceFiles,
                     ] )
      .pipe( watch( sourceFiles ) )
      .pipe( ui5preload( {base: `${SRC_ROOT}/${module.path}`, namespace: 'com.bpw.complaints'} ) )
      .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
  } );

  gulp.task( `ui5preload-watch-dev:${module.path}`, function() {
    const sourceFiles = `${ASSETS_ROOT}/${module.path}/**/**.+(xml)`;
    return watch( sourceFiles, function() {
      gulp.src( [
                  sourceFiles,
                ] )
        .pipe( watch( sourceFiles ) )
        .pipe( ui5preload( {base: `${SRC_ROOT}/${module.path}`, namespace: 'com.bpw.complaints'} ) )
        .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
    } );
  } );


  gulp.task( `copyFile-dev:${module.path}`, function() {
    const sourceFiles = `${SRC_ROOT}/${module.path}/**/**/**.+(json|xml|html|properties|css)`;
    return gulp.src( sourceFiles )
      .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
  } );

  gulp.task( `copyFileWatch-dev:${module.path}`, function() {
    const sourceFiles = `${SRC_ROOT}/${module.path}/**/**/**.+(json|xml|html|properties|css)`;
    return watch( sourceFiles, function() {
      gulp.src( sourceFiles )
        .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
    } );
  } );

  gulp.task( `watch-less:${module.path}`, () => {
    const sourceFiles = `${SRC_ROOT}/${module.path}/**/**/**/**.+(less)`;
    return watch( sourceFiles, function() {
      gulp.src( sourceFiles )
        .pipe( less() )
        .pipe( minifyCss() )
        .pipe( gulp.dest( `${ASSETS_ROOT}/${module.path}` ) );
    } );
  } );
}
