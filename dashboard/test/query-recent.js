var Fs = require('fire-fs');
var App = require('app');
var Ipc = require('ipc');

// NOTE: we must remove listeners for this to make sure tests can continue
App.removeAllListeners('window-all-closed');

require('../init');

assert.isTrue( typeof Editor.App['app:query-recent'] === 'function' );
Ipc.on( 'app:query-recent', Editor.App['app:query-recent'] );

//
describe('app:query-recent (Dashboard)', function() {
    before(function ( done ) {
        Editor.App._profile = {
            'recently-opened': [
                Editor.url('app://dashboard/test/fixtures/projects/broken-package-json'),
                Editor.url('app://dashboard/test/fixtures/projects/invalid-package-json'),
                Editor.url('app://dashboard/test/fixtures/projects/not-a-fireball-project'),
                Editor.url('app://dashboard/test/fixtures/projects/simple-cocos2d-js'),
            ],
            'last-login': '',
            'remember-passwd': true,
            'login-type': 'account',
        };

        done();
    });

    var win;
    var ipcListener = new Editor.IpcListener();
    var pageUrl = 'app://dashboard/test/fixtures/app-query-recent.html';

    assert.isTrue( Fs.existsSync(Editor.url(pageUrl)) );

    beforeEach(function ( done ) {
        ipcListener.on('page:ready', done);

        // create main window
        win = new Editor.Window('main', {
            'title': 'app:query-recent',
            'width': 400,
            'height': 400,
            'min-width': 400,
            'min-height': 400,
            'show': true,
            'resizable': false,
        });
        win.load(pageUrl);
    });
    afterEach(function ( done ) {
        win.close();
        win.nativeWin.on('closed', function () {
            win.dispose();
            ipcListener.clear();
            done();
        });
    });

    it('should get recently project', function( done ) {
        ipcListener.on('app:query-recent:forward', function ( results ) {
            expect(results).to.deep.equal([
                {
                    name: 'broken-package-json',
                    path: Editor.url('app://dashboard/test/fixtures/projects/broken-package-json'),
                    runtime: 'unknown',
                    error: 'settings/project.json broken',
                },
                {
                    name: 'invalid-package-json',
                    path: Editor.url('app://dashboard/test/fixtures/projects/invalid-package-json'),
                    runtime: 'unknown',
                    error: 'Can not find runtime in settings/project.json',
                },
                {
                    name: 'simple-cocos2d-js',
                    path: Editor.url('app://dashboard/test/fixtures/projects/simple-cocos2d-js'),
                    runtime: 'cocos2d-js'
                },
            ]);
            done();
        });
    });
});
