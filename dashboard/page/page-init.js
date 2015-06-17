(function () {

window.Dashboard = window.Dashboard || {};

Dashboard.runtimeInfos = Editor.sendToCoreSync('app:get-runtime-infos');
Dashboard.templateInfos = Editor.sendToCoreSync('app:get-template-infos');

var Path = require('fire-path');
var Fs = require('fire-fs');

function _getUserDoc() {
    if (process.env.USERPROFILE) {
        var win8 = Path.join(process.env.USERPROFILE, 'Documents');
        if (Fs.existsSync(win8)) {
            return win8;
        }
        var win7 = Path.join(process.env.USERPROFILE, 'My Documents');
        if (Fs.existsSync(win7)) {
            return win7;
        }
    }
    return process.cwd();
}

Object.defineProperty( Dashboard, 'userHome', {
    get: function () {
        if (Editor.isWin32) {
            return _getUserDoc();
        }
        return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
    }
});

})();
