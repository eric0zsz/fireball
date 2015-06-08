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
                { name: 'Hello World', path: '~/hello/world', runtime: 'cocos2d-js' },
                { name: 'Foo Bar', path: '~/foo/bar', runtime: 'pixi' },
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
                { name: 'Hello World', path: '~/hello/world', runtime: 'cocos2d-js' },
                { name: 'Foo Bar', path: '~/foo/bar', runtime: 'pixi' },
            ]);
            done();
        });
    });
});
