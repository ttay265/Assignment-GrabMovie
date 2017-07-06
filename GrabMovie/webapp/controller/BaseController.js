sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/m/MessageToast"
], function(Controller, Device, MessageToast) {
	"use strict";

	/*
        Common base class for the controllers of this app containing some convenience methods
    */
	return Controller.extend("GrabMovie.controller.BaseController", {

		/**
		 * Convenience method for getting the control of view by Id.
		 * @public
		 * @param {string} sId id of the control
		 * @returns {sap.m.control} the control
		 */
		byId: function(sId) {
			return this.getView().byId(sId);
		},

		/**
		 * Convenience method for getting the control of view by Id.
		 * @public
		 * @param {string} sId id of the control
		 * @returns {sap.m.control} the control
		 */
		getSId: function(id) {
			return this.getView().getId() + "--" + id;
		},

		back: function() {
			window.history.back();
		},

		getDevice: function() {
			return Device;
		},
		/**
		 * Convenience method for accessing the router in each controller of the application.
		 * @public
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		},

		/**
		 * Convenience method for getting the view model by name in every controller of the application.
		 * @public
		 * @param {string} sName the model name
		 * @returns {sap.ui.model.Model} the model instance
		 */
		getModel: function(sName) {
			// if (sName === null || sName === "") {
			// 	return this.getOwnerComponent().getModel("i18n");
			// }
			return this.getView().getModel(sName) || this.getOwnerComponent().getModel(sName);
		},

		/**
		 * Convenience method for setting the view model in every controller of the application.
		 * @public
		 * @param {sap.ui.model.Model} oModel the model instance
		 * @param {string} sName the model name
		 * @returns {sap.ui.mvc.View} the view instance
		 */
		setModel: function(oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		/**
		 * Convenience method for getting the resource bundle.
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} the resource model of the component
		 */
		getResourceBundle: function() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		/**
		 * Convenience method to get the global model containing the global state of the app.
		 * @returns {object} the global Propery model
		 */
		getGlobalModel: function() {
			return this.getOwnerComponent().getModel("globalProperties");
		},

		/**
		 * Convenience method
		 * @returns {object} the application controller
		 */
		getApplication: function() {
			return this.getGlobalModel().getProperty("/application");
		},

		/**
		 * Convenience method checking login token
		 * @returns {object} the application controller
		 */
		checkLogin: function() {
			var token = this.getGlobalModel().getProperty("/token");
			return token !== "none";
		}
	});
});