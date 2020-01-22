import Control from "sap/ui/core/Control";

export default class Demo extends Control {

  metadata = {
    properties: {
      width: {
        type: "sap.ui.core.CSSSize", //this is optional, but it helps prevent errors in your code by enforcing a type
        defaultValue: "100%" //this is also optional, but recommended, as it prevents your properties being null
      },
      height: {
        type: "sap.ui.core.CSSSize",
        defaultValue: "auto"
      },
      background: {
        type: "sap.ui.core.CSSColor",
        defaultValue: "#ffffff"
      },
      margin: {
        type: "sap.ui.core.CSSSize",
        defaultValue: "5px"
      }
    },
    aggregations: {
      content: {
        type: "sap.ui.core.Control"
      }
    },
    defaultAggregation: "content",
  }

  init() {
    //initialisation code, in this case, ensure css is imported
    var libraryPath = jQuery.sap.getModulePath( "com.bpw.complaints.control" ); //get the server location of the ui library
    jQuery.sap.includeStyleSheet( libraryPath + "/DemoBox.css" ); //specify the css path relative from the ui folder
  }

  renderer( oRm, oControl ) {
    //first up, render a div for the ShadowBox
    oRm.write( "<div" );
    //add this controls style class (plus any additional ones the developer has specified)
    oRm.addClass( "demoBox" );
    oRm.writeClasses( oControl );

    //render width & height & background properties
    oRm.write( " style=\"width: " + oControl.getWidth()
               + "; height: " + oControl.getHeight()
               + "; background-color: " + oControl.getBackground()
               + "; margin: " + oControl.getMargin()
               + "\"" );

    //next, render the control information, this handles your sId (you must do this for your control to be properly tracked by ui5).
    oRm.writeControlData( oControl );
    oRm.write( ">" );

    //next, iterate over the content aggregation, and call the renderer for each control
    $( oControl.getContent() ).each( function() {
      oRm.renderControl( this );
    } );

    //and obviously, close off our div
    oRm.write( "</div>" )
  }

  onAfterRendering() {
    //if I need to do any post render actions, it will happen here
    if ( sap.ui.core.Control.prototype.onAfterRendering ) {
      sap.ui.core.Control.prototype.onAfterRendering.apply( this, arguments ); //run the super class's method first
    }
  }
}
