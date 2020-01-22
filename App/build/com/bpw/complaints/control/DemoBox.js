"use strict";

sap.ui.define("com/bpw/complaints/control/DemoBox", ["sap/ui/core/Control"], function (Control) {
  "use strict";

  return Control.extend("com.bpw.complaints.control.Demo", {
    metadata: {
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
      defaultAggregation: "content"
    },
    init: function init() {
      //initialisation code, in this case, ensure css is imported
      var libraryPath = jQuery.sap.getModulePath("com.bpw.complaints.control"); //get the server location of the ui library
      jQuery.sap.includeStyleSheet(libraryPath + "/DemoBox.css"); //specify the css path relative from the ui folder
    },
    renderer: function renderer(oRm, oControl) {
      //first up, render a div for the ShadowBox
      oRm.write("<div");
      //add this controls style class (plus any additional ones the developer has specified)
      oRm.addClass("demoBox");
      oRm.writeClasses(oControl);

      //render width & height & background properties
      oRm.write(" style=\"width: " + oControl.getWidth() + "; height: " + oControl.getHeight() + "; background-color: " + oControl.getBackground() + "; margin: " + oControl.getMargin() + "\"");

      //next, render the control information, this handles your sId (you must do this for your control to be properly tracked by ui5).
      oRm.writeControlData(oControl);
      oRm.write(">");

      //next, iterate over the content aggregation, and call the renderer for each control
      $(oControl.getContent()).each(function () {
        oRm.renderControl(this);
      });

      //and obviously, close off our div
      oRm.write("</div>");
    },
    onAfterRendering: function onAfterRendering() {
      //if I need to do any post render actions, it will happen here
      if (sap.ui.core.Control.prototype.onAfterRendering) {
        sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments); //run the super class's method first
      }
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wvRGVtb0JveC5qcyJdLCJuYW1lcyI6WyJtZXRhZGF0YSIsInByb3BlcnRpZXMiLCJ3aWR0aCIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwibWFyZ2luIiwiYWdncmVnYXRpb25zIiwiY29udGVudCIsImRlZmF1bHRBZ2dyZWdhdGlvbiIsImluaXQiLCJsaWJyYXJ5UGF0aCIsImpRdWVyeSIsInNhcCIsImdldE1vZHVsZVBhdGgiLCJpbmNsdWRlU3R5bGVTaGVldCIsInJlbmRlcmVyIiwib1JtIiwib0NvbnRyb2wiLCJ3cml0ZSIsImFkZENsYXNzIiwid3JpdGVDbGFzc2VzIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJnZXRCYWNrZ3JvdW5kIiwiZ2V0TWFyZ2luIiwid3JpdGVDb250cm9sRGF0YSIsIiQiLCJnZXRDb250ZW50IiwiZWFjaCIsInJlbmRlckNvbnRyb2wiLCJvbkFmdGVyUmVuZGVyaW5nIiwidWkiLCJjb3JlIiwiQ29udHJvbCIsInByb3RvdHlwZSIsImFwcGx5IiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJRUEsWSxFQUFXO0FBQ1RDLGtCQUFZO0FBQ1ZDLGVBQU87QUFDTEMsZ0JBQU0scUJBREQsRUFDd0I7QUFDN0JDLHdCQUFjLE1BRlQsQ0FFZ0I7QUFGaEIsU0FERztBQUtWQyxnQkFBUTtBQUNORixnQkFBTSxxQkFEQTtBQUVOQyx3QkFBYztBQUZSLFNBTEU7QUFTVkUsb0JBQVk7QUFDVkgsZ0JBQU0sc0JBREk7QUFFVkMsd0JBQWM7QUFGSixTQVRGO0FBYVZHLGdCQUFRO0FBQ05KLGdCQUFNLHFCQURBO0FBRU5DLHdCQUFjO0FBRlI7QUFiRSxPQURIO0FBbUJUSSxvQkFBYztBQUNaQyxpQkFBUztBQUNQTixnQkFBTTtBQURDO0FBREcsT0FuQkw7QUF3QlRPLDBCQUFvQjtBQXhCWCxLO0FBMkJYQyxRLGtCQUFPO0FBQ0w7QUFDQSxVQUFJQyxjQUFjQyxPQUFPQyxHQUFQLENBQVdDLGFBQVgsQ0FBMEIsNEJBQTFCLENBQWxCLENBRkssQ0FFdUU7QUFDNUVGLGFBQU9DLEdBQVAsQ0FBV0UsaUJBQVgsQ0FBOEJKLGNBQWMsY0FBNUMsRUFISyxDQUd5RDtBQUMvRCxLO0FBRURLLFksb0JBQVVDLEcsRUFBS0MsUSxFQUFXO0FBQ3hCO0FBQ0FELFVBQUlFLEtBQUosQ0FBVyxNQUFYO0FBQ0E7QUFDQUYsVUFBSUcsUUFBSixDQUFjLFNBQWQ7QUFDQUgsVUFBSUksWUFBSixDQUFrQkgsUUFBbEI7O0FBRUE7QUFDQUQsVUFBSUUsS0FBSixDQUFXLHFCQUFxQkQsU0FBU0ksUUFBVCxFQUFyQixHQUNFLFlBREYsR0FDaUJKLFNBQVNLLFNBQVQsRUFEakIsR0FFRSxzQkFGRixHQUUyQkwsU0FBU00sYUFBVCxFQUYzQixHQUdFLFlBSEYsR0FHaUJOLFNBQVNPLFNBQVQsRUFIakIsR0FJRSxJQUpiOztBQU1BO0FBQ0FSLFVBQUlTLGdCQUFKLENBQXNCUixRQUF0QjtBQUNBRCxVQUFJRSxLQUFKLENBQVcsR0FBWDs7QUFFQTtBQUNBUSxRQUFHVCxTQUFTVSxVQUFULEVBQUgsRUFBMkJDLElBQTNCLENBQWlDLFlBQVc7QUFDMUNaLFlBQUlhLGFBQUosQ0FBbUIsSUFBbkI7QUFDRCxPQUZEOztBQUlBO0FBQ0FiLFVBQUlFLEtBQUosQ0FBVyxRQUFYO0FBQ0QsSztBQUVEWSxvQiw4QkFBbUI7QUFDakI7QUFDQSxVQUFLbEIsSUFBSW1CLEVBQUosQ0FBT0MsSUFBUCxDQUFZQyxPQUFaLENBQW9CQyxTQUFwQixDQUE4QkosZ0JBQW5DLEVBQXNEO0FBQ3BEbEIsWUFBSW1CLEVBQUosQ0FBT0MsSUFBUCxDQUFZQyxPQUFaLENBQW9CQyxTQUFwQixDQUE4QkosZ0JBQTlCLENBQStDSyxLQUEvQyxDQUFzRCxJQUF0RCxFQUE0REMsU0FBNUQsRUFEb0QsQ0FDcUI7QUFDMUU7QUFDRiIsImZpbGUiOiJjb250cm9sL0RlbW9Cb3guanMiLCJzb3VyY2VSb290IjoiLi9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbCBmcm9tIFwic2FwL3VpL2NvcmUvQ29udHJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vIGV4dGVuZHMgQ29udHJvbCB7XG5cbiAgbWV0YWRhdGEgPSB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgd2lkdGg6IHtcbiAgICAgICAgdHlwZTogXCJzYXAudWkuY29yZS5DU1NTaXplXCIsIC8vdGhpcyBpcyBvcHRpb25hbCwgYnV0IGl0IGhlbHBzIHByZXZlbnQgZXJyb3JzIGluIHlvdXIgY29kZSBieSBlbmZvcmNpbmcgYSB0eXBlXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCIxMDAlXCIgLy90aGlzIGlzIGFsc28gb3B0aW9uYWwsIGJ1dCByZWNvbW1lbmRlZCwgYXMgaXQgcHJldmVudHMgeW91ciBwcm9wZXJ0aWVzIGJlaW5nIG51bGxcbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6IHtcbiAgICAgICAgdHlwZTogXCJzYXAudWkuY29yZS5DU1NTaXplXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJhdXRvXCJcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIHR5cGU6IFwic2FwLnVpLmNvcmUuQ1NTQ29sb3JcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIiNmZmZmZmZcIlxuICAgICAgfSxcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0eXBlOiBcInNhcC51aS5jb3JlLkNTU1NpemVcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIjVweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBhZ2dyZWdhdGlvbnM6IHtcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogXCJzYXAudWkuY29yZS5Db250cm9sXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlZmF1bHRBZ2dyZWdhdGlvbjogXCJjb250ZW50XCIsXG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vaW5pdGlhbGlzYXRpb24gY29kZSwgaW4gdGhpcyBjYXNlLCBlbnN1cmUgY3NzIGlzIGltcG9ydGVkXG4gICAgdmFyIGxpYnJhcnlQYXRoID0galF1ZXJ5LnNhcC5nZXRNb2R1bGVQYXRoKCBcImNvbS5icHcuY29tcGxhaW50cy5jb250cm9sXCIgKTsgLy9nZXQgdGhlIHNlcnZlciBsb2NhdGlvbiBvZiB0aGUgdWkgbGlicmFyeVxuICAgIGpRdWVyeS5zYXAuaW5jbHVkZVN0eWxlU2hlZXQoIGxpYnJhcnlQYXRoICsgXCIvRGVtb0JveC5jc3NcIiApOyAvL3NwZWNpZnkgdGhlIGNzcyBwYXRoIHJlbGF0aXZlIGZyb20gdGhlIHVpIGZvbGRlclxuICB9XG5cbiAgcmVuZGVyZXIoIG9SbSwgb0NvbnRyb2wgKSB7XG4gICAgLy9maXJzdCB1cCwgcmVuZGVyIGEgZGl2IGZvciB0aGUgU2hhZG93Qm94XG4gICAgb1JtLndyaXRlKCBcIjxkaXZcIiApO1xuICAgIC8vYWRkIHRoaXMgY29udHJvbHMgc3R5bGUgY2xhc3MgKHBsdXMgYW55IGFkZGl0aW9uYWwgb25lcyB0aGUgZGV2ZWxvcGVyIGhhcyBzcGVjaWZpZWQpXG4gICAgb1JtLmFkZENsYXNzKCBcImRlbW9Cb3hcIiApO1xuICAgIG9SbS53cml0ZUNsYXNzZXMoIG9Db250cm9sICk7XG5cbiAgICAvL3JlbmRlciB3aWR0aCAmIGhlaWdodCAmIGJhY2tncm91bmQgcHJvcGVydGllc1xuICAgIG9SbS53cml0ZSggXCIgc3R5bGU9XFxcIndpZHRoOiBcIiArIG9Db250cm9sLmdldFdpZHRoKClcbiAgICAgICAgICAgICAgICsgXCI7IGhlaWdodDogXCIgKyBvQ29udHJvbC5nZXRIZWlnaHQoKVxuICAgICAgICAgICAgICAgKyBcIjsgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBvQ29udHJvbC5nZXRCYWNrZ3JvdW5kKClcbiAgICAgICAgICAgICAgICsgXCI7IG1hcmdpbjogXCIgKyBvQ29udHJvbC5nZXRNYXJnaW4oKVxuICAgICAgICAgICAgICAgKyBcIlxcXCJcIiApO1xuXG4gICAgLy9uZXh0LCByZW5kZXIgdGhlIGNvbnRyb2wgaW5mb3JtYXRpb24sIHRoaXMgaGFuZGxlcyB5b3VyIHNJZCAoeW91IG11c3QgZG8gdGhpcyBmb3IgeW91ciBjb250cm9sIHRvIGJlIHByb3Blcmx5IHRyYWNrZWQgYnkgdWk1KS5cbiAgICBvUm0ud3JpdGVDb250cm9sRGF0YSggb0NvbnRyb2wgKTtcbiAgICBvUm0ud3JpdGUoIFwiPlwiICk7XG5cbiAgICAvL25leHQsIGl0ZXJhdGUgb3ZlciB0aGUgY29udGVudCBhZ2dyZWdhdGlvbiwgYW5kIGNhbGwgdGhlIHJlbmRlcmVyIGZvciBlYWNoIGNvbnRyb2xcbiAgICAkKCBvQ29udHJvbC5nZXRDb250ZW50KCkgKS5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAgIG9SbS5yZW5kZXJDb250cm9sKCB0aGlzICk7XG4gICAgfSApO1xuXG4gICAgLy9hbmQgb2J2aW91c2x5LCBjbG9zZSBvZmYgb3VyIGRpdlxuICAgIG9SbS53cml0ZSggXCI8L2Rpdj5cIiApXG4gIH1cblxuICBvbkFmdGVyUmVuZGVyaW5nKCkge1xuICAgIC8vaWYgSSBuZWVkIHRvIGRvIGFueSBwb3N0IHJlbmRlciBhY3Rpb25zLCBpdCB3aWxsIGhhcHBlbiBoZXJlXG4gICAgaWYgKCBzYXAudWkuY29yZS5Db250cm9sLnByb3RvdHlwZS5vbkFmdGVyUmVuZGVyaW5nICkge1xuICAgICAgc2FwLnVpLmNvcmUuQ29udHJvbC5wcm90b3R5cGUub25BZnRlclJlbmRlcmluZy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7IC8vcnVuIHRoZSBzdXBlciBjbGFzcydzIG1ldGhvZCBmaXJzdFxuICAgIH1cbiAgfVxufVxuIl19