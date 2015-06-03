var gulp = require('gulp');
var shell = require('gulp-shell');
var Fs = require('fire-fs');
var Path = require('path');
var pjson = JSON.parse(Fs.readFileSync('./package.json'));
var mkdirp = require('mkdirp');
var git = require('./utils/git.js');
var spawn = require('child_process').spawn;

// require tasks
require('./editor-framework/tasks/download-shell');


// run
gulp.task('run-electron', function(cb) {
    var stream;
    if (process.platform === "win32") {
        stream = shell(['call bin\\electron\\electron.exe %cd%\\. --debug=3030 --dev --show-devtools']);
    } else {
        stream = shell(['./bin/electron/Electron.app/Contents/MacOS/Electron ./ --debug=3030 --dev --show-devtools "$@"']);
    }
    stream.write(process.stdout);
    stream.end();
    stream.on('finish', cb);
});

gulp.task('run-fireshell', function(cb) {
  var stream;
  if (process.platform === "win32") {
      stream = shell(['call bin\\fire-shell\\fireball.exe %cd%\\. --debug=3030 --dev --show-devtools']);
  } else {
      stream = shell(['./bin/fire-shell/Fireball.app/Contents/MacOS/Fireball ./ --debug=3030 --dev --show-devtools "$@"']);
  }
  stream.write(process.stdout);
  stream.end();
  stream.on('finish', cb);
});

gulp.task('install-builtin', function(cb) {
  var count = 0;
  if (Fs.isDirSync('builtin')) {
    pjson.builtins.map(function(packageName) {
      if (!Fs.existsSync(Path.join('builtin', packageName, '.git'))) {
        count++;
        git.runGitCmdInPath(['clone', 'https://github.com/fireball-packages/' + packageName], 'builtin', function() {
          if (--count <= 0) {
            console.log('Builtin packages installation complete!');
            cb();
          }
        });
      } else {
        console.log(packageName + ' has already installed in builtin/' + packageName + ' folder!');
      }
    });
  } else {
    mkdirp('builtin');
    pjson.builtins.map(function(packageName) {
      count++;
      git.runGitCmdInPath(['clone', 'https://github.com/fireball-packages/' + packageName], 'builtin', function() {
        if (--count <= 0) {
          console.log('Builtin packages installation complete!');
          cb();
        }
      });
    });
  }
});

gulp.task('update-builtin', function(cb) {
  var count = 0;
  if (Fs.isDirSync('builtin')) {
    pjson.builtins.map(function(packageName) {
      if (Fs.existsSync(Path.join('builtin', packageName, '.git'))) {
        count++;
        git.runGitCmdInPath(['pull', 'origin'], Path.join('builtin', packageName), function() {
          if (--count <= 0) {
            console.log('Builtin packages update complete!');
            cb();
          }
        });
      } else {
        console.warn('Builtin package ' + packageName + ' not initialized, please run "gulp install-builtin" first!');
      }
    });
  } else {
    console.warn('Builtin folder not initialized, please run "gulp install-builtin" first!');
    cb();
  }
});

gulp.task('npm', function(cb) {
  var cmdstr = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  var tmpenv = process.env;
  var os = require('os');
  tmpenv.npm_config_disturl = 'https://atom.io/download/atom-shell';
  tmpenv.npm_config_target = pjson['fire-shell-version'];
  tmpenv.npm_config_arch = os.arch();
  tmpenv.HOME = Path.join(tmpenv.HOME, '.electron-gyp');
  var child = spawn(cmdstr, ['install'], {
    stdio: 'inherit',
    env: tmpenv
  });
  child.on('exit', cb);
});
