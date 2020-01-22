"use strict";

sap.ui.define("com/bpw/complaints/control/Switch", ["sap/m/Switch"], function (Control) {
  "use strict";

  return Control.extend("com.bpw.complaints.control.Switch", {
    metadata: {
      properties: {
        editable: {
          type: "boolean",
          defaultValue: true
        }
      }
    },
    renderer: function renderer(oRm, oControl) {
      if (oControl.getEditable()) sap.m.SwitchRenderer.render(oRm, oControl); //use supercass renderer routine
      else {
          //render control as simple text
          var txt = oControl.getState() ? oControl._sOn : oControl._sOff; //use the super classes existing variables for on/off text
          oRm.write("<span tabindex=\"0\"");
          oRm.writeControlData(oControl); //ui5 trackings data, outputs sId, absolutely mandatory
          oRm.writeClasses(oControl); //allows the class="" attribute to work correctly
          oRm.write(">");
          oRm.write(jQuery.sap.encodeHTML(txt)); //always use encodeHTML when dealing with dynamic strings
          oRm.write("</span>");
        }
    },
    _setDomState: function _setDomState(p) {
      this.rerender();
    },
    ontouchstart: function ontouchstart(e) {
      if (this.getEditable()) sap.m.Switch.prototype.ontouchstart.call(this, e);
    },
    ontouchmove: function ontouchmove(e) {
      if (this.getEditable()) sap.m.Switch.prototype.ontouchmove.call(this, e);
    },
    ontouchend: function ontouchend(e) {
      if (this.getEditable()) sap.m.Switch.prototype.ontouchend.call(this, e);
    },
    ontouchcancel: function ontouchcancel(e) {
      if (this.getEditable()) sap.m.Switch.prototype.ontouchcancel.call(this, e);
    },
    onsapselect: function onsapselect(e) {
      if (this.getEditable()) sap.m.Switch.prototype.onsapselect.call(this, e);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wvU3dpdGNoLmpzIl0sIm5hbWVzIjpbIm1ldGFkYXRhIiwicHJvcGVydGllcyIsImVkaXRhYmxlIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsInJlbmRlcmVyIiwib1JtIiwib0NvbnRyb2wiLCJnZXRFZGl0YWJsZSIsInNhcCIsIm0iLCJTd2l0Y2hSZW5kZXJlciIsInJlbmRlciIsInR4dCIsImdldFN0YXRlIiwiX3NPbiIsIl9zT2ZmIiwid3JpdGUiLCJ3cml0ZUNvbnRyb2xEYXRhIiwid3JpdGVDbGFzc2VzIiwialF1ZXJ5IiwiZW5jb2RlSFRNTCIsIl9zZXREb21TdGF0ZSIsInAiLCJyZXJlbmRlciIsIm9udG91Y2hzdGFydCIsImUiLCJTd2l0Y2giLCJwcm90b3R5cGUiLCJjYWxsIiwib250b3VjaG1vdmUiLCJvbnRvdWNoZW5kIiwib250b3VjaGNhbmNlbCIsIm9uc2Fwc2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJRUEsWSxFQUFXO0FBQ1RDLGtCQUFZO0FBQ1ZDLGtCQUFVO0FBQ1JDLGdCQUFNLFNBREU7QUFFUkMsd0JBQWM7QUFGTjtBQURBO0FBREgsSztBQVNYQyxZLG9CQUFVQyxHLEVBQUtDLFEsRUFBVztBQUN4QixVQUFHQSxTQUFTQyxXQUFULEVBQUgsRUFDRUMsSUFBSUMsQ0FBSixDQUFNQyxjQUFOLENBQXFCQyxNQUFyQixDQUE0Qk4sR0FBNUIsRUFBZ0NDLFFBQWhDLEVBREYsQ0FDNkM7QUFEN0MsV0FFSztBQUNIO0FBQ0EsY0FBSU0sTUFBT04sU0FBU08sUUFBVCxLQUNUUCxTQUFTUSxJQURBLEdBQ09SLFNBQVNTLEtBRDNCLENBRkcsQ0FHZ0M7QUFDbkNWLGNBQUlXLEtBQUosQ0FBVSxzQkFBVjtBQUNBWCxjQUFJWSxnQkFBSixDQUFxQlgsUUFBckIsRUFMRyxDQUs2QjtBQUNoQ0QsY0FBSWEsWUFBSixDQUFpQlosUUFBakIsRUFORyxDQU15QjtBQUM1QkQsY0FBSVcsS0FBSixDQUFVLEdBQVY7QUFDQVgsY0FBSVcsS0FBSixDQUFXRyxPQUFPWCxHQUFQLENBQVdZLFVBQVgsQ0FBdUJSLEdBQXZCLENBQVgsRUFSRyxDQVF3QztBQUMzQ1AsY0FBSVcsS0FBSixDQUFVLFNBQVY7QUFDRDtBQUNGLEs7QUFFREssZ0Isd0JBQWFDLEMsRUFBRztBQUNkLFdBQUtDLFFBQUw7QUFDRCxLO0FBR0RDLGdCLHdCQUFhQyxDLEVBQUc7QUFDZCxVQUFHLEtBQUtsQixXQUFMLEVBQUgsRUFDRUMsSUFBSUMsQ0FBSixDQUFNaUIsTUFBTixDQUFhQyxTQUFiLENBQXVCSCxZQUF2QixDQUFvQ0ksSUFBcEMsQ0FBeUMsSUFBekMsRUFBOENILENBQTlDO0FBQ0gsSztBQUNESSxlLHVCQUFZSixDLEVBQUc7QUFDYixVQUFHLEtBQUtsQixXQUFMLEVBQUgsRUFDRUMsSUFBSUMsQ0FBSixDQUFNaUIsTUFBTixDQUFhQyxTQUFiLENBQXVCRSxXQUF2QixDQUFtQ0QsSUFBbkMsQ0FBd0MsSUFBeEMsRUFBNkNILENBQTdDO0FBQ0gsSztBQUNESyxjLHNCQUFXTCxDLEVBQUc7QUFDWixVQUFHLEtBQUtsQixXQUFMLEVBQUgsRUFDRUMsSUFBSUMsQ0FBSixDQUFNaUIsTUFBTixDQUFhQyxTQUFiLENBQXVCRyxVQUF2QixDQUFrQ0YsSUFBbEMsQ0FBdUMsSUFBdkMsRUFBNENILENBQTVDO0FBQ0gsSztBQUNETSxpQix5QkFBY04sQyxFQUFHO0FBQ2YsVUFBRyxLQUFLbEIsV0FBTCxFQUFILEVBQ0VDLElBQUlDLENBQUosQ0FBTWlCLE1BQU4sQ0FBYUMsU0FBYixDQUF1QkksYUFBdkIsQ0FBcUNILElBQXJDLENBQTBDLElBQTFDLEVBQStDSCxDQUEvQztBQUNILEs7QUFDRE8sZSx1QkFBWVAsQyxFQUFHO0FBQ2IsVUFBRyxLQUFLbEIsV0FBTCxFQUFILEVBQ0VDLElBQUlDLENBQUosQ0FBTWlCLE1BQU4sQ0FBYUMsU0FBYixDQUF1QkssV0FBdkIsQ0FBbUNKLElBQW5DLENBQXdDLElBQXhDLEVBQTZDSCxDQUE3QztBQUNIIiwiZmlsZSI6ImNvbnRyb2wvU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2wgZnJvbSBcInNhcC9tL1N3aXRjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBDb250cm9sIHtcblxuICBtZXRhZGF0YSA9IHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBlZGl0YWJsZToge1xuICAgICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyZXIoIG9SbSwgb0NvbnRyb2wgKSB7XG4gICAgaWYob0NvbnRyb2wuZ2V0RWRpdGFibGUoKSlcbiAgICAgIHNhcC5tLlN3aXRjaFJlbmRlcmVyLnJlbmRlcihvUm0sb0NvbnRyb2wpOyAvL3VzZSBzdXBlcmNhc3MgcmVuZGVyZXIgcm91dGluZVxuICAgIGVsc2Uge1xuICAgICAgLy9yZW5kZXIgY29udHJvbCBhcyBzaW1wbGUgdGV4dFxuICAgICAgdmFyIHR4dCA9IChvQ29udHJvbC5nZXRTdGF0ZSgpID9cbiAgICAgICAgb0NvbnRyb2wuX3NPbiA6IG9Db250cm9sLl9zT2ZmKTsgLy91c2UgdGhlIHN1cGVyIGNsYXNzZXMgZXhpc3RpbmcgdmFyaWFibGVzIGZvciBvbi9vZmYgdGV4dFxuICAgICAgb1JtLndyaXRlKFwiPHNwYW4gdGFiaW5kZXg9XFxcIjBcXFwiXCIpO1xuICAgICAgb1JtLndyaXRlQ29udHJvbERhdGEob0NvbnRyb2wpOyAvL3VpNSB0cmFja2luZ3MgZGF0YSwgb3V0cHV0cyBzSWQsIGFic29sdXRlbHkgbWFuZGF0b3J5XG4gICAgICBvUm0ud3JpdGVDbGFzc2VzKG9Db250cm9sKTsgLy9hbGxvd3MgdGhlIGNsYXNzPVwiXCIgYXR0cmlidXRlIHRvIHdvcmsgY29ycmVjdGx5XG4gICAgICBvUm0ud3JpdGUoXCI+XCIpO1xuICAgICAgb1JtLndyaXRlKCBqUXVlcnkuc2FwLmVuY29kZUhUTUwoIHR4dCApICk7IC8vYWx3YXlzIHVzZSBlbmNvZGVIVE1MIHdoZW4gZGVhbGluZyB3aXRoIGR5bmFtaWMgc3RyaW5nc1xuICAgICAgb1JtLndyaXRlKFwiPC9zcGFuPlwiKTtcbiAgICB9XG4gIH1cblxuICBfc2V0RG9tU3RhdGUocCkge1xuICAgIHRoaXMucmVyZW5kZXIoKTtcbiAgfVxuXG4gIC8vZG9uJ3QgYWxsb3cgdGhlIGlucHV0IGV2ZW50cyB0byBmaXJlIGluIGVkaXRhYmxlPWZhbHNlIG1vZGVcbiAgb250b3VjaHN0YXJ0KGUpIHtcbiAgICBpZih0aGlzLmdldEVkaXRhYmxlKCkpXG4gICAgICBzYXAubS5Td2l0Y2gucHJvdG90eXBlLm9udG91Y2hzdGFydC5jYWxsKHRoaXMsZSk7XG4gIH1cbiAgb250b3VjaG1vdmUoZSkge1xuICAgIGlmKHRoaXMuZ2V0RWRpdGFibGUoKSlcbiAgICAgIHNhcC5tLlN3aXRjaC5wcm90b3R5cGUub250b3VjaG1vdmUuY2FsbCh0aGlzLGUpO1xuICB9XG4gIG9udG91Y2hlbmQoZSkge1xuICAgIGlmKHRoaXMuZ2V0RWRpdGFibGUoKSlcbiAgICAgIHNhcC5tLlN3aXRjaC5wcm90b3R5cGUub250b3VjaGVuZC5jYWxsKHRoaXMsZSk7XG4gIH1cbiAgb250b3VjaGNhbmNlbChlKSB7XG4gICAgaWYodGhpcy5nZXRFZGl0YWJsZSgpKVxuICAgICAgc2FwLm0uU3dpdGNoLnByb3RvdHlwZS5vbnRvdWNoY2FuY2VsLmNhbGwodGhpcyxlKTtcbiAgfVxuICBvbnNhcHNlbGVjdChlKSB7XG4gICAgaWYodGhpcy5nZXRFZGl0YWJsZSgpKVxuICAgICAgc2FwLm0uU3dpdGNoLnByb3RvdHlwZS5vbnNhcHNlbGVjdC5jYWxsKHRoaXMsZSk7XG4gIH1cbn1cbiJdfQ==