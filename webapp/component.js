sap.ui.define([
    'sap/ui/core/UIComponent',
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"

], function (UIComponent, JSONModel, HelloDialog) {
    'use strict';
    return UIComponent.extend("sap.ui.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            //call he init unction of the parent

            UIComponent.prototype.init.apply(this, arguments);
            //Set data models
            var oData = {
                recipient: {
                    name: "User"
                }
            };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            //set dialog

            this._helloDialog = new HelloDialog(this.getRootControl());

            // create the views based on the url/hash

            this.getRouter().initialize();

        },
        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function () {
            this._helloDialog.open();
        }
    })

}); 