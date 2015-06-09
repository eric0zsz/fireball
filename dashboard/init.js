var VERSION = '0.1.0';

var Path = require('fire-path');
var Fs = require('fire-fs');
var Globby = require('globby');
var Async = require('async');
var Chai = require('chai');

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
    _profile: {},
    _runtimeInfos: {},
    _templateInfos: {},

    loadRuntimeInfos: function ( runtimePath, cb ) {
        var paths = Globby.sync( Path.join(runtimePath,'*/package.json') );
        Async.eachSeries( paths, function ( path, done ) {
            Editor.log('Load runtime info: %s', path);
            try {
                var pkgJsonObj = JSON.parse(Fs.readFileSync(path));
                Editor.App._runtimeInfos[pkgJsonObj.name] = {
                    path: Path.dirname(path),
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

    loadTemplate: function ( templatePath, cb ) {
        var paths = Globby.sync( Path.join(templatePath,'*/package.json') );
        Async.eachSeries( paths, function ( path, done ) {
            Editor.log('Load template: %s', path);
            try {
                var pkgJsonObj = JSON.parse(Fs.readFileSync(path));
                Editor.App._templateInfos[pkgJsonObj.name] = {
                    path: Path.dirname(path),
                    name: pkgJsonObj.name,
                    version: pkgJsonObj.version,
                    description: pkgJsonObj.description,
                };
            }
            catch ( err ) {
                Editor.error('Failed to load template at %s, %s', path, err.message);
            }

            done();
        }, cb);
    },

    createProject: function ( opts, cb ) {
        opts = opts || {};
        try {
            var assert = Chai.assert;
            assert.typeOf( opts.path, 'string', 'Invalid parameter: opts.path' );
            assert.typeOf( opts.runtime, 'string', 'Invalid parameter: opts.runtime'  );
            assert.isFalse( Fs.existsSync(opts.path), 'The path ' + opts.path + ' already exists.' );
            assert.isDefined( Editor.App._runtimeInfos[opts.runtime], 'Can not find runtime: ' + opts.runtime );
            if ( opts.template ) {
                assert.isDefined( Editor.App._templateInfos[opts.template], 'Can not find template: ' + opts.template );
            }
        }
        catch ( err ) {
            if ( cb ) cb (err);
            return;
        }

        //
        Async.series([
            function ( next ) {
                if ( opts.template ) {
                    // TODO: copy the template and create project
                    next ();
                }
                else {
                    next ();
                }
            },

            function ( next ) {
                Fs.makeTreeSync( opts.path );
                Fs.mkdirSync( Path.join(opts.path, 'settings') );
                Fs.mkdirSync( Path.join(opts.path, 'local') );
                Fs.mkdirSync( Path.join(opts.path, 'library') );
                Fs.mkdirSync( Path.join(opts.path, 'assets') );
                Fs.mkdirSync( Path.join(opts.path, 'packages') );

                var profile = {
                    runtime: opts.runtime,
                };
                Fs.writeFileSync( Path.join(opts.path,'settings/project.json'),
                                  JSON.stringify(profile, null, 2));
                next();
            },
        ], function ( err ) {
            if ( cb ) cb (err);
        });
    },

    runCanvasStudio: function ( projectPath, cb ) {
        var Spawn = require('child_process').spawn;
        var App = require('app');
        var exePath = App.getPath('exe');
        var child = Spawn(exePath, ['./', projectPath], {
            detached: true,
            stdio: 'ignore',
        });
        child.unref();

        if ( cb ) cb ();
    },

    run: function () {
        Async.series([
            // load ~/.fireball/fireball.json
            function ( next ) {
                Editor.log('Load ~/.fireball/fireball.json');
                Editor.App._profile = Editor.loadProfile( 'fireball', 'global', {
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

            // load template
            // TODO: we still not have template for loading
            // function ( next ) {
            //     Editor.App.loadTemplate( Editor.url('app://template/'), next );
            // },

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

    'app:query-recent': function ( reply ) {
        reply(Editor.App._profile['recently-opened']);
    },

    'app:create-project': function ( reply, opts ) {
        Async.series([
            function ( next ) {
                Editor.App.createProject ( opts, next );
            },

            function ( next ) {
                Editor.App.runCanvasStudio(opts.path, next );
            },
        ], function ( err ) {
            if ( err ) {
                reply (err);
                return;
            }

            reply ();
            Editor.quit();
        });
    },

    'app:get-runtime-infos': function ( event ) {
        event.returnValue = Editor.App._runtimeInfos;
    },

    'app:get-template-infos': function ( event ) {
        event.returnValue = Editor.App._templateInfos;
    },
});
