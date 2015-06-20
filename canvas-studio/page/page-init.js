(function () {
    Editor.projectInfo = Editor.remote.projectInfo;
    Editor.libraryPath = Editor.remote.libraryPath;

    // init engine-framework
    Editor.require('app://engine-framework');

    // init asset-db
    Editor.require('app://asset-db');
})();
