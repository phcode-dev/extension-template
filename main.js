/*global define, brackets, $ */

// See detailed docs in https://github.com/phcode-dev/phoenix/wiki/How-To-Write-Extensions-And-Themes

define(function (require, exports, module) {
    "use strict";

    // Brackets modules
    var AppInit = brackets.getModule("utils/AppInit"),
        DefaultDialogs           = brackets.getModule("widgets/DefaultDialogs"),
        Dialogs                  = brackets.getModule("widgets/Dialogs");

    // Initialize extension once shell is finished initializing.
    AppInit.appReady(function () {
        console.log("hello world");
        Dialogs.showModalDialog(
            DefaultDialogs.DIALOG_ID_INFO,
            "hello", "world"
        );
    });
    
});

