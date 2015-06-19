var Fs = require('fire-fs');
var Path = require('fire-path');
var Async = require('async');
var Shell = require('shell');

//
Editor.versions['canvas-studio'] = '0.1.0';
Editor.projectPath = '';
Editor.requireLogin = false;

// init
module.exports = function ( options, cb ) {
    Editor.projectPath = options.args[0];
    Editor.runtimePath = '';
    Editor.requireLogin = !Editor.isDev || options.requireLogin;
    Editor.projectInfo = null;

    var Project = require('../share/project');

    Async.series([
        // create project if path not exists (happy, a clean directory for us!)
        function ( next ) {
            if ( Fs.existsSync(Editor.projectPath) ) {
                next ();
                return;
            }

            var runtime, template;

            if ( options.runtime ) {
                var runtimePath = Editor.url('app://runtime/runtime-' + options.runtime);
                var pkgJsonObj = JSON.parse(Fs.readFileSync( Path.join(runtimePath, 'package.json') ));
                runtime = {
                    path: runtimePath,
                    name: pkgJsonObj.name,
                    version: pkgJsonObj.version,
                    description: pkgJsonObj.description,
                };
            }

            if ( options.template ) {
                // TODO
            }

            //
            Editor.log( 'Create project %s', Editor.projectPath );
            Project.create(Editor.projectPath, runtime, template, next);
        },

        // check if project valid
        function ( next ) {
            Editor.log( 'Check project %s', Editor.projectPath );
            Project.check( Editor.projectPath, function ( err, info ) {
                if ( err ) {
                    next (err);
                    return;
                }

                Editor.projectInfo = info;
                Editor.runtimePath = Editor.url('app://runtime/runtime-' + info.runtime);

                next();
            } );
        },

        // register
        function ( next ) {
            Editor.log( 'Initializing Engine Framework (Fire)' );
            require('../engine-framework');

            Editor.log( 'Initializing Asset Database' );
            var AssetDB = require('../asset-db');
            Editor.assetdb = new AssetDB({
                cwd: Path.join( Editor.projectPath ),
                library: 'library',
            });

            // TODO: register common meta
            // Editor.assetdb.register( '.png', null, false, Editor.TextureMeta );
            // Editor.assetdb.register( '.jpg', null, false, Editor.TextureMeta );

            Editor.log( 'Initializing Runtime %s', Editor.projectInfo.runtime );
            require( Editor.runtimePath );
            Runtime.init(Editor.assetdb);

            Editor.log( 'Initializing Fireball Canvas Studio' );

            // register panel window
            Editor.Panel.templateUrl = 'app://canvas-studio/static/window.html';

            // register global profile path =  ~/.fireball/canvas-studio/
            var globalProfilePath = Path.join(Editor.appHome, 'canvas-studio');
            if ( !Fs.existsSync(globalProfilePath) ) {
                Fs.makeTreeSync(globalProfilePath);
            }
            Editor.registerProfilePath( 'global', globalProfilePath );

            // register profile 'project' = {project}/settings/
            Editor.registerProfilePath( 'project', Path.join(Editor.projectPath, 'settings') );

            // register profile 'local' = {project}/local/
            Editor.registerProfilePath( 'local', Path.join(Editor.projectPath, 'local') );

            // register packages = {project}/packages/
            Editor.registerPackagePath( Path.join(Editor.projectPath, 'packages') );

            // register default layout
            Editor.registerDefaultLayout( Editor.url('app://canvas-studio/static/layout.json') );

            // apply default main menu
            var MainMenuTmplFn = require('./main-menu');
            Editor.registerDefaultMainMenu(MainMenuTmplFn);
            Editor.MainMenu.reset();

            next ();
        },
    ], function ( err ) {
        if ( cb ) cb ( err );
    });
};

// mixin app
Editor.JS.mixin(Editor.App, {
    runDashboard: function () {
        var Spawn = require('child_process').spawn;
        var App = require('app');
        var exePath = App.getPath('exe');
        var child = Spawn(exePath, ['./'], {
            detached: true,
            stdio: 'ignore',
        });
        child.unref();

        Editor.quit();
    },

    run: function () {
        Async.series([
            function ( next ) {
                Editor.assetdb.mount(Path.join(Editor.projectPath, 'assets'),
                                     'assets',
                                     next);
            },

            function ( next ) {
                Editor.assetdb.init( next );
            },

            function ( next ) {
                // create main window
                var win = new Editor.Window('main', {
                    'title': 'Fireball - Canvas Studio',
                    'width': 1280,
                    'height': 720,
                    'min-width': 100,
                    'min-height': 100,
                    'show': false,
                    'resizable': true,
                });
                Editor.mainWindow = win;

                // restore window size and position
                win.restorePositionAndSize();

                // load and show main window
                win.show();

                // page-level test case
                win.load( 'app://canvas-studio/index.html' );

                // open dev tools if needed
                if ( Editor.showDevtools ) {
                    win.nativeWin.webContents.once('did-finish-load', function () {
                        win.openDevTools({
                            detach: true
                        });
                    });
                }
                win.focus();

                next ();
            },
        ], function ( err ) {
            if ( err ) {
                Editor.error( 'Failed to run canvas-studio, message: %s', err.stack );
            }
        });
    },

    load: function () {
        // TODO
        // console.log('app load');
    },

    unload: function () {
        // TODO
        // console.log('app unload');
    },

    'app:explore-project': function () {
        Shell.showItemInFolder(Editor.projectPath);
    },

    'app:explore-assets': function () {
        Shell.showItemInFolder(Editor.assetdb._fspath('assets://'));
    },

    'app:explore-library': function () {
        Shell.showItemInFolder(Editor.assetdb.library);
    },
});
