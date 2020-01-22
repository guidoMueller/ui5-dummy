"use strict";

sap.ui.define("com/bpw/complaints/controller/demo/Demo.controller", ["sap/ui/model/odata/v2/ODataModel", "com/bpw/complaints/controller/BaseController", "com/bpw/complaints/utils/Formatter"], function (ODataModel, BaseController, Formatter) {
  "use strict";

  return BaseController.extend("com.bpw.complaints.controller.demo.Demo", {
    formatter: Formatter,
    onInit: function onInit() {
      var sServiceUrl = '/odata/service.svc';
      var oModel = new ODataModel(sServiceUrl, {
        json: false,
        useBatch: false
      });
      this.getView().setModel(oModel);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvZGVtby9EZW1vLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZm9ybWF0dGVyIiwiRm9ybWF0dGVyIiwib25Jbml0Iiwic1NlcnZpY2VVcmwiLCJvTW9kZWwiLCJPRGF0YU1vZGVsIiwianNvbiIsInVzZUJhdGNoIiwiZ2V0VmlldyIsInNldE1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNRUEsYSxFQUFZQyxTO0FBRVpDLFUsb0JBQVM7QUFDUCxVQUFJQyxjQUFjLG9CQUFsQjtBQUNBLFVBQUlDLFNBQVMsSUFBSUMsVUFBSixDQUFlRixXQUFmLEVBQTRCO0FBQ3ZDRyxjQUFNLEtBRGlDO0FBRXZDQyxrQkFBVTtBQUY2QixPQUE1QixDQUFiO0FBSUEsV0FBS0MsT0FBTCxHQUFlQyxRQUFmLENBQXdCTCxNQUF4QjtBQUNEIiwiZmlsZSI6ImNvbnRyb2xsZXIvZGVtby9EZW1vLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT0RhdGFNb2RlbCBmcm9tIFwic2FwL3VpL21vZGVsL29kYXRhL3YyL09EYXRhTW9kZWxcIjtcbmltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tIFwiY29tL2Jwdy9jb21wbGFpbnRzL2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBGb3JtYXR0ZXIgZnJvbSBcImNvbS9icHcvY29tcGxhaW50cy91dGlscy9Gb3JtYXR0ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuXG4gIGZvcm1hdHRlciA9IEZvcm1hdHRlclxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgc1NlcnZpY2VVcmwgPSAnL29kYXRhL3NlcnZpY2Uuc3ZjJztcbiAgICB2YXIgb01vZGVsID0gbmV3IE9EYXRhTW9kZWwoc1NlcnZpY2VVcmwsIHtcbiAgICAgIGpzb246IGZhbHNlLFxuICAgICAgdXNlQmF0Y2g6IGZhbHNlXG4gICAgfSk7XG4gICAgdGhpcy5nZXRWaWV3KCkuc2V0TW9kZWwob01vZGVsKTtcbiAgfVxufVxuIl19