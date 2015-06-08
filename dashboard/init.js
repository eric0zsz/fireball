var VERSION = '0.1.0';

var Path = require('fire-path');
var Fs = require('fire-fs');
var Globby = require('globby');
var Async = require('async');

//
Editor.log( 'Initializing Fireball Dashboard' );

Editor.versions.dashboard = VERSION;

// initialize ~/.fireball/dashboard/
var settingsPath = Path.join(Editor.appHome, 'dashboard');
if ( !Fs.existsSync(settingsPath) ) {
    Fs.makeTreeSync(settingsPath);
}
Editor.registerProfilePath( 'local', settingsPath );

// mixin app
Editor.JS.mixin(Editor.App, {
    _runtimeInfos: {},

    loadRuntimeInfos: function ( runtimePath, cb ) {
        var paths = Globby.sync( Path.join(runtimePath,'*/package.json') );
        Async.eachSeries( paths, function ( path, done ) {
            Editor.log('Load runtime info: %s', path);
            try {
                var pkgJsonObj = JSON.parse(Fs.readFileSync(path));
                Editor.App._runtimeInfos[pkgJsonObj.name] = {
                    path: path,
                    name: pkgJsonObj.name,
                    version: pkgJsonObj.version,
                    description: pkgJsonObj.description,
                };
            }
            catch ( err ) {
                Editor.error('Failed to load runtime info at %s, %s', path, err.message);
            }

            done();
        }, cb);
    },

    run: function () {
        Async.series([
            // load ~/.fireball/fireball.json
            function ( next ) {
                Editor.log('Load ~/.fireball/fireball.json');
                Editor.loadProfile( 'fireball', 'global', {
                    'recently-opened': [],
                    'last-login': '',
                    'remember-passwd': true,
                    'login-type': 'account',
                });
                next();
            },

            // load runtime infos
            function ( next ) {
                Editor.App.loadRuntimeInfos( Editor.url('app://runtime/'), next );
            },

            // open window
            function ( next ) {
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
                win.load( 'app://dashboard/index.html' );

                // open dev tools if needed
                if ( Editor.showDevtools ) {
                    win.openDevTools({
                        detach: true
                    });
                }
                win.focus();

                next();
            },
        ]);
    },

    load: function () {
        // TODO
        // console.log('app load');
    },

    unload: function () {
        // TODO
        // console.log('app unload');
    },

    'app:get-runtime-infos': function ( event ) {
        // TODO:
        event.returnValue = {
            'pixi': {
                path: 'runtime/runtime-pixi/',
                name: 'pixi',
                version: '3.0.6',
                description: 'A pixi runtime',
            },
            'cocos2d-js': {
                path: 'runtime/runtime-cocos2d-js/',
                name: 'cocos2d-js',
                version: '3.6.1',
                description: 'A cocos2d-js runtime',
            },
        };
    },

    'app:get-template-infos': function ( event ) {
        // TODO
        event.returnValue = {
        };
    },
});
