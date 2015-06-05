(function () {

window.Dashboard = window.Dashboard || {};

Dashboard.runtimeInfos = Editor.sendToCoreSync('app:get-runtime-infos');

})();
