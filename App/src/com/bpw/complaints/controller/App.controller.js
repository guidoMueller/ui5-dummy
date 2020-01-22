import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "com/bpw/complaints/controller/BaseController";

export default class App extends BaseController {

	onInit() {
		console.log("------------tes2t---------------")
		var oJSONModel = new JSONModel();

		sap.ui.getCore().setModel(oJSONModel,"accountModel");

		this.getView().setModel( sap.ui.getCore().getModel("accountModel") );
	}


	onPressSideNavigationToggleButton (event) {
		console.log(this.getView().getModel().getData())
		//var oSideNavigation = this.getView().byId('sideNavigation');
		//oSideNavigation.setExpanded(!oSideNavigation.getExpanded());
		var toolPage = this.getView().byId("toolPage");
		toolPage.setSideExpanded(!toolPage.getSideExpanded());
	}

	onItemSelect(oEvent){
		var item = oEvent.getParameter("item");

		switch(item.getKey()){
			case "dashboard":
				this.getRouter().navTo("dashboard");
				break;
			case "demo":
				this.getRouter().navTo("demo");
				break;
		}
	}
}

