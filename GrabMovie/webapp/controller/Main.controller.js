sap.ui.define([
	"GrabMovie/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("GrabMovie.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf GrabMovie.view.Main
		 */
		onInit: function() {

		},

		navPage: function(oEvent) {
			var sourceId = oEvent.getSource().getIdForLabel();
			var pageIndex = this.getGlobalModel().getProperty("/CurrentPage");
			switch (sourceId) {
				case this.getSId("btnBooking"):
					pageIndex = 1;
					break;
				case this.getSId("btnTickets"):
					pageIndex = 2;
					break;
				case this.getSId("btnProfile"):
					pageIndex = 3;
					break;
			}
			this.getGlobalModel().setProperty("/CurrentPage", pageIndex, null, true);
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf GrabMovie.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf GrabMovie.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf GrabMovie.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});