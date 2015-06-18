(function () {
    Editor.projectInfo = Editor.remote.projectInfo;

    // init engine-framework
    Editor.require('app://engine-framework');

    // init runtime
    var runtimeUrl = 'app://runtime/runtime-' + Editor.projectInfo.runtime + '/index.html';
    Polymer.Base.importHref( runtimeUrl, function ( event ) {

        Fire.AssetLibrary.init("%library path%");

        // Fire.Engine.init({
        //     width: width,
        //     height: height,
        //     canvas: canvas
        // }, callback);

    }, function ( err ) {
        Editor.error( 'Failed to load %s. message: %s', runtimeUrl, err.message );
    });
})();
