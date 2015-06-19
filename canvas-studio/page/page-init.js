(function () {
    Editor.projectInfo = Editor.remote.projectInfo;

    // init engine-framework
    Editor.require('app://engine-framework');

    // init asset-db
    Editor.require('app://asset-db');

    // init runtime
    var runtimeUrl = 'app://runtime/runtime-' + Editor.projectInfo.runtime + '/index.html';
    Polymer.Base.importHref( runtimeUrl, function ( event ) {
        Fire.AssetLibrary.init(Editor.assetdb.library);

        // DELME ?? currently, only scene panel needs Fire.Engine
        // Fire.Engine.init({
        //     width: width,
        //     height: height,
        //     canvas: canvas
        // }, callback);

    }, function ( err ) {
        Editor.error( 'Failed to load %s. message: %s', runtimeUrl, err.message );
    });
})();
