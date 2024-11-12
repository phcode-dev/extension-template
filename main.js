/*global define, brackets, $ */

// See detailed docs in https://docs.phcode.dev/api/creating-extensions

// A good place to look for code examples for extensions: https://github.com/phcode-dev/phoenix/tree/main/src/extensions/default

// A simple extension that adds an entry in "file menu> hello world"
define(function (require, exports, module) {
    "use strict";

    // Brackets modules
    const AppInit = brackets.getModule("utils/AppInit"),
        DefaultDialogs = brackets.getModule("widgets/DefaultDialogs"),
        Dialogs = brackets.getModule("widgets/Dialogs"),
        CommandManager = brackets.getModule("command/CommandManager"),
        Menus = brackets.getModule("command/Menus");

    // Function to run when the menu item is clicked
    function handleHelloWorld() {
        Dialogs.showModalDialog(
            DefaultDialogs.DIALOG_ID_INFO,
            "hello",
            "world"
        );
    }
    
      // First, register a command - a UI-less object associating an id to a handler
    var MY_COMMAND_ID = "helloworld.sayhello";   // package-style naming to avoid collisions
    CommandManager.register("Hello World", MY_COMMAND_ID, handleHelloWorld);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    menu.addMenuItem(MY_COMMAND_ID);
    
    // We could also add a key binding at the same time:
    //menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-W");
    // (Note: "Ctrl" is automatically mapped to "Cmd" on Mac)
    
    // Initialize extension once shell is finished initializing.
    AppInit.appReady(function () {
        console.log("hello world");
    });
});
