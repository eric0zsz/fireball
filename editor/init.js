Editor.log( 'Initializing engine-framework' );
// TODO

Editor.log( 'Initializing asset-db' );
// TODO

Editor.log( 'Initializing fireball' );
// TODO

// mixin app
Editor.JS.mixin(Editor.App, {
    run: function () {
        // create main window
        var win = new Editor.Window('main', {
            'title': 'Fireball Editor',
            'min-width': 800,
            'min-height': 600,
            'show': false,
            'resizable': true,
        });
        Editor.mainWindow = win;

        // restore window size and position
        win.restorePositionAndSize();

        // load and show main window
        win.show();

        // page-level test case
        win.load( 'app://editor/static/index.html' );

        // open dev tools if needed
        if ( Editor.showDevtools ) {
            win.openDevTools({
                detach: true
            });
        }
        win.focus();
    },

    load: function () {
        // TODO
        // console.log('app load');
    },

    unload: function () {
        // TODO
        // console.log('app unload');
    },

    'app:test': function () {
        console.log('hello editor');
    },
});
