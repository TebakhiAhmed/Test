sap.ui.define([
    'sap/ui/base/ManagedObject',
    'sap/ui/core/Fragment'
], function (ManagedObject, Fragment) {
    'use strict';
    return ManagedObject.extend("sap.ui.walkthrough.controller.HelloDialog", {
        constructor: function (oView) {
            this._oView = oView
        },
        exit: function () {
            delete this._oView;
        },
        open: function () {
            var oView = this._oView;
            //create the dialog
            if (!oView.byId("helloDialog")) {
                var oFragmentConrtoller = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }

                //load  async XML Fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentConrtoller
                }).then(function (oDialog) {
                    //connect the dialog to the root view of the component (model,lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            }

            else {
                oView.byId("helloDialog").open();
            }

        }

    });

});