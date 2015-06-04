(function () {

var Ipc = require('ipc');

window.Dashboard = window.Dashboard || {};

Dashboard.runtimeInfos = Ipc.sendSync('app:get-runtime-infos');

})();
