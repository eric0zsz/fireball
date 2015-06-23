(function () {
    Editor.projectInfo = Editor.remote.projectInfo;
    Editor.libraryPath = Editor.remote.libraryPath;

    if ( !Editor.assets ) Editor.assets = {};
    if ( !Editor.metas ) Editor.metas = {};
    if ( !Editor.inspectors ) Editor.inspectors = {};

    // init engine-framework
    Editor.require('app://engine-framework');

    // init asset-db
    Editor.require('app://asset-db');

    // init canvas-assets
    Editor.require('packages://canvas-assets/init');
})();
