import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import BaseController from "com/bpw/complaints/controller/BaseController";
import Formatter from "com/bpw/complaints/utils/Formatter"

export default class Demo extends BaseController {

  formatter = Formatter

  onInit() {
    var sServiceUrl = '/odata/service.svc';
    var oModel = new ODataModel(sServiceUrl, {
      json: false,
      useBatch: false
    });
    this.getView().setModel(oModel);
  }
}
