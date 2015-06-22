(function () {
    Editor.projectInfo = Editor.remote.projectInfo;
    Editor.libraryPath = Editor.remote.libraryPath;

    // init engine-framework
    Editor.require('app://engine-framework');

    // init Editor.assets
    Editor.assets = {
        asset: Fire.Asset,
    };

    // init asset-db
    Editor.require('app://asset-db');

    // init canvas-assets
    Editor.require('packages://canvas-assets/init');
})();
