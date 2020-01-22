import Control from "sap/m/Switch";

export default class Switch extends Control {

  metadata = {
    properties: {
      editable: {
        type: "boolean",
        defaultValue: true
      }
    }
  }

  renderer( oRm, oControl ) {
    if(oControl.getEditable())
      sap.m.SwitchRenderer.render(oRm,oControl); //use supercass renderer routine
    else {
      //render control as simple text
      var txt = (oControl.getState() ?
        oControl._sOn : oControl._sOff); //use the super classes existing variables for on/off text
      oRm.write("<span tabindex=\"0\"");
      oRm.writeControlData(oControl); //ui5 trackings data, outputs sId, absolutely mandatory
      oRm.writeClasses(oControl); //allows the class="" attribute to work correctly
      oRm.write(">");
      oRm.write( jQuery.sap.encodeHTML( txt ) ); //always use encodeHTML when dealing with dynamic strings
      oRm.write("</span>");
    }
  }

  _setDomState(p) {
    this.rerender();
  }

  //don't allow the input events to fire in editable=false mode
  ontouchstart(e) {
    if(this.getEditable())
      sap.m.Switch.prototype.ontouchstart.call(this,e);
  }
  ontouchmove(e) {
    if(this.getEditable())
      sap.m.Switch.prototype.ontouchmove.call(this,e);
  }
  ontouchend(e) {
    if(this.getEditable())
      sap.m.Switch.prototype.ontouchend.call(this,e);
  }
  ontouchcancel(e) {
    if(this.getEditable())
      sap.m.Switch.prototype.ontouchcancel.call(this,e);
  }
  onsapselect(e) {
    if(this.getEditable())
      sap.m.Switch.prototype.onsapselect.call(this,e);
  }
}
