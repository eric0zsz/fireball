var Fs = require('fire-fs');
var Path = require('fire-path');

var VERSION = '0.1.0';
var _isSinglePackage = false;

// init
module.exports = function ( options, cb ) {
    Editor.log( 'Initializing Fireball Package Studio' );
    Editor.versions['package-studio'] = VERSION;

    var projectPath = options.args[0];

    // initialize ~/.fireball/package-studio/
    var localPath = Path.join(Editor.appHome, 'package-studio');
    if ( !Fs.existsSync(localPath) ) {
        Fs.makeTreeSync(localPath);
    }
    Editor.registerProfilePath( 'local', localPath );

    //
    Editor.registerDefaultLayout( Editor.url('app://package-studio/static/layout.json') );

    //
    var _isSinglePackage = false;
    if ( projectPath && Fs.existsSync(projectPath) ) {
        if ( Fs.existsSync( Path.join(projectPath, 'package.json') ) ) {
            _isSinglePackage = true;
        }
        else {
            Editor.registerPackagePath(Path.resolve(projectPath));
        }
    }

    if ( cb ) cb ();
};

// mixin app
Editor.JS.mixin(Editor.App, {
    run: function () {
        if ( _isSinglePackage ) {
            Editor.Package.load(Path.resolve(Editor.App.projectPath));
        }

        // create main window
        var win = new Editor.Window('main', {
            'title': 'Fireball - Package Studio',
            'width': 1280,
            'height': 720,
            'min-width': 1280,
            'min-height': 720,
            'show': false,
            'resizable': true,
        });
        Editor.mainWindow = win;

        // restore window size and position
        win.restorePositionAndSize();

        // load and show main window
        win.show();

        // page-level test case
        win.load( 'app://package-studio/index.html' );

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
