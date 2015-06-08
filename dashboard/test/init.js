var Fs = require('fire-fs');
var Async = require('async');
var App = require('app');

require('../init');

//
describe('Editor.App (Dashboard)', function() {
    describe('Editor.App.loadRuntimeInfos', function() {
        afterEach(function ( done ) {
            Editor.App._runtimeInfos = {};
            done();
        });

        it('should load all runtimes in fixtures/runtime-simple/', function( done ) {
            var path = Editor.url('app://dashboard/test/fixtures/runtime-simple/');
            assert.isTrue(Fs.existsSync(path));
            Editor.App.loadRuntimeInfos( path, function ( err ) {
                expect(Editor.App._runtimeInfos).to.deep.equal({
                    "cocos2d-js": {
                        "description": "A cocos2d-js runtime",
                        "name": "cocos2d-js",
                        "path": Editor.url("app://dashboard/test/fixtures/runtime-simple/runtime-cocos2d-js/package.json"),
                        "version": "0.0.1",
                    },
                    "pixi": {
                        "description": "A pixi runtime",
                        "name": "pixi",
                        "path": Editor.url("app://dashboard/test/fixtures/runtime-simple/runtime-pixi/package.json"),
                        "version": "0.0.1",
                    },
                    "three.js": {
                        "description": "A three.js runtime",
                        "name": "three.js",
                        "path": Editor.url("app://dashboard/test/fixtures/runtime-simple/runtime-three-js/package.json"),
                        "version": "0.0.1",
                    },
                    "babylonjs": {
                        "description": "A babylonjs runtime",
                        "name": "babylonjs",
                        "path": Editor.url("app://dashboard/test/fixtures/runtime-simple/runtime-babylonjs/package.json"),
                        "version": "0.0.1"
                    },
                });
                done();
            });
        });

        it('should report error but continue loading other runtime infos in fixtures/runtime-with-error/', function( done ) {
            var path = Editor.url('app://dashboard/test/fixtures/runtime-with-error/');
            assert.isTrue(Fs.existsSync(path));
            Editor.App.loadRuntimeInfos( path, function ( err ) {
                expect(Editor.App._runtimeInfos).to.deep.equal({
                    "pixi": {
                        "description": "A pixi runtime",
                        "name": "pixi",
                        "path": Editor.url("app://dashboard/test/fixtures/runtime-with-error/runtime-pixi/package.json"),
                        "version": "0.0.1"
                    },
                });
                done();
            });
        });
    });
});
