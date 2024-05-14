sap.ui.define([
    'sap/ui/core/mvc/Controller',
    
], function(Controller ) {
    'use strict';
    return Controller.extend("sap.demo.walkthrough.App",{
        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog();
        }

    });
});