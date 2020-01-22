"use strict";

sap.ui.define("com/bpw/complaints/Component", ["sap/ui/core/UIComponent"], function (UIComponent) {
	"use strict";

	return UIComponent.extend("com.bpw.complaints.Component", {
		metadata: {
			manifest: "json"
		},
		init: function init() {
			UIComponent.prototype.init.apply(this, arguments);

			// initialize router
			this.getRouter().initialize();
		}
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtZXRhZGF0YSIsIm1hbmlmZXN0IiwiaW5pdCIsIlVJQ29tcG9uZW50IiwicHJvdG90eXBlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnZXRSb3V0ZXIiLCJpbml0aWFsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQ0EsVSxFQUFXO0FBQ1ZDLGFBQVU7QUFEQSxHO0FBS1hDLE0sa0JBQU87QUFDTkMsZUFBWUMsU0FBWixDQUFzQkYsSUFBdEIsQ0FBMkJHLEtBQTNCLENBQWtDLElBQWxDLEVBQXdDQyxTQUF4Qzs7QUFFQTtBQUNBLFFBQUtDLFNBQUwsR0FBaUJDLFVBQWpCO0FBQ0EiLCJmaWxlIjoiQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gXCJzYXAvdWkvY29yZS9VSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cblx0bWV0YWRhdGEgPSB7XG5cdFx0bWFuaWZlc3Q6IFwianNvblwiXG5cdH1cblxuXG5cdGluaXQoKSB7XG5cdFx0VUlDb21wb25lbnQucHJvdG90eXBlLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXG5cdFx0Ly8gaW5pdGlhbGl6ZSByb3V0ZXJcblx0XHR0aGlzLmdldFJvdXRlcigpLmluaXRpYWxpemUoKTtcblx0fVxufVxuIl19