var VERSION = '0.1.0';

//
Editor.log( 'Initializing Fireball Dashboard' );

Editor.versions.dashboard = VERSION;
// TODO

// load ~/.fireball/fireball.json
Editor.loadProfile( 'fireball', 'global', {
    'recently-opened': [],
    'last-login': '',
    'remember-passwd': true,
    'login-type': 'account',
});

// mixin app
Editor.JS.mixin(Editor.App, {
    run: function () {
        // create main window
        var win = new Editor.Window('main', {
            'title': 'Fireball Dashboard',
            'width': 800,
            'height': 600,
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
        win.load( 'app://dashboard/static/index.html' );

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
});
