sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast,Fragment) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {

            // read message from i18n model

            var oBubdle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMSg = oBubdle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMSg)
        },
        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog();

        },
        onCloseDialog : function() {
            this.byId("helloDialog").close();
        }
    })
});