var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var shell = require('gulp-shell');
var Fs = require('fire-fs');
var Path = require('path');
var pjson = JSON.parse(Fs.readFileSync('./package.json'));
var mkdirp = require('mkdirp');
var git = require('./utils/git.js');
var spawn = require('child_process').spawn;

// require tasks
require('./utils/download-shell');


// public tasks

gulp.task('bootstrap', gulpSequence('init-submodules', 'install-builtin', 'install-runtime', 'update-electron', 'npm', 'bower'));

gulp.task('update', gulpSequence('pull-fireball', ['update-builtin', 'update-runtime', 'update-electron']));

gulp.task('update-deps', ['npm', 'bower']);

gulp.task('run', ['run-electron']);

gulp.task('fireball', ['run-canvasstudio']);

gulp.task('package-studio', ['run-packagestudio']);


// run
gulp.task('run-electron', function(cb) {
  var cmdStr = '';
  var optArr = [];
  if (process.platform === "win32") {
    cmdStr = 'bin\\electron\\electron.exe';
    optArr = ['.\\', '--debug=3030', '--dev', '--show-devtools'];
  } else {
    cmdStr = 'bin/electron/Electron.app/Contents/MacOS/Electron';
    optArr = ['./','--debug=3030','--dev','--show-devtools'];
  }
  var child = spawn(cmdStr, optArr, { stdio: 'inherit'});
  child.on('exit', function() {
    cb();
  });
});

gulp.task('run-fireshell', function(cb) {
  var cmdStr = '';
  var optArr = [];
  if (process.platform === "win32") {
    cmdStr = 'bin\\fire-shell\\fireball.exe';
    optArr = ['.\\', '--debug=3030', '--dev', '--show-devtools'];
  } else {
    cmdStr = 'bin/fire-shell/Fireball.app/Contents/MacOS/Fireball';
    optArr = ['./','--debug=3030','--dev','--show-devtools'];
  }
  var child = spawn(cmdStr, optArr, { stdio: 'inherit'});
  child.on('exit', function() {
    cb();
  });
});

gulp.task('run-packagestudio', function(cb) {
  var Commander = require('commander');
  Commander.option('--path <path>', 'Run packages in path' )
           .parse(process.argv)
           ;

  var packagePath = Commander.path;
  if ( packagePath ) {
      console.log('Load packages from %s', packagePath);
  } else {
    console.log('Please provide a valid project path with "--path" arguments');
  }

  var cmdStr = '';
  var optArr = [];
  if (process.platform === "win32") {
    cmdStr = 'bin\\electron\\electron.exe';
    optArr = ['.\\', '--debug=3030', '--dev', '--dev-mode=packages', '--show-devtools', packagePath];
  } else {
    cmdStr = 'bin/electron/Electron.app/Contents/MacOS/Electron';
    optArr = ['./','--debug=3030','--dev','--dev-mode=packages','--show-devtools', packagePath];
  }

  var child = spawn(cmdStr, optArr, { stdio: 'inherit'});
  child.on('exit', function() {
    cb();
  });
});

gulp.task('run-canvasstudio', function(cb) {
  var Commander = require('commander');
  Commander.option('--path <path>', 'Run open fireball project in path' )
           .parse(process.argv)
           ;

  var projectPath = Commander.path;
  if ( projectPath ) {
      console.log('Load project from %s', projectPath);
  }

  var cmdStr = '';
  var optArr = [];
  if (process.platform === "win32") {
    cmdStr = 'bin\\electron\\electron.exe';
    optArr = ['.\\', '--debug=3030', '--dev', '--show-devtools', projectPath];
  } else {
    cmdStr = 'bin/electron/Electron.app/Contents/MacOS/Electron';
    optArr = ['./','--debug=3030','--dev','--show-devtools', projectPath];
  }

  var child = spawn(cmdStr, optArr, { stdio: 'inherit'});
  child.on('exit', function() {
    cb();
  });
});

gulp.task('init-submodules', function(cb) {
  git.runGitCmdInPath(['submodule', 'update', '--init'], './', function() {
    console.log('Git submodules inited!');
    cb();
  });
});

gulp.task('pull-fireball', function(cb) {
  git.runGitCmdInPath(['pull', 'https://github.com/fireball-x/fireball.git', 'dev'], './', function() {
    console.log('Fireball update complete!');
    git.runGitCmdInPath(['fetch', '--all'], './', function() {
      console.log('Remote head updated!');
      cb();
    });
  });
});

gulp.task('pull-submodules', function(cb) {
  var modules = pjson.submodules;
  var count = modules.length;
  modules.map(function(module) {
    if (Fs.existsSync(Path.join(module, '.git'))) {
      git.runGitCmdInPath(['pull', 'origin', 'master'], module, function() {
        if (--count <= 0) {
          console.log('Git submodules pull complete!');
          cb();
        }
      });
    } else {
      console.log(module + ' not initialized. Please run "gulp init-submodules" first!');
      return cb();
    }
  });
});

gulp.task('install-builtin', function(cb) {
  var count = pjson.builtins.length;
  if (Fs.isDirSync('builtin')) {
    pjson.builtins.map(function(packageName) {
      if (!Fs.existsSync(Path.join('builtin', packageName, '.git'))) {
        git.runGitCmdInPath(['clone', 'https://github.com/fireball-packages/' + packageName], 'builtin', function() {
          if (--count <= 0) {
            console.log('Builtin packages installation complete!');
            cb();
          }
        });
      } else {
        console.log(packageName + ' has already installed in builtin/' + packageName + ' folder!');
        console.log(count);
        if (--count <= 0) {
          cb();
        }
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
        git.runGitCmdInPath(['pull', 'https://github.com/fireball-packages/' + packageName, 'master'], Path.join('builtin', packageName), function() {
          git.runGitCmdInPath(['fetch', '--all'], Path.join('builtin', packageName), function() {
            console.log('Remote head updated!');
            if (--count <= 0) {
              console.log('Builtin packages update complete!');
              cb();
            }
          });
        });
      } else {
        console.warn('Builtin package ' + packageName + ' not initialized, please run "gulp install-builtin" first!');
        return cb();
      }
    });
  } else {
    console.warn('Builtin folder not initialized, please run "gulp install-builtin" first!');
    cb();
  }
});

gulp.task('install-runtime', function(cb) {
  var count = pjson.runtimes.length;
  if (Fs.isDirSync('runtime')) {
    pjson.runtimes.map(function(runtimeName) {
      if (!Fs.existsSync(Path.join('runtime', runtimeName, '.git'))) {
        git.runGitCmdInPath(['clone', 'https://github.com/fireball-x/' + runtimeName], 'runtime', function() {
          if (--count <= 0) {
            console.log('Runtime engines installation complete!');
            console.log(count);
            cb();
          }
        });
      } else {
        console.log(runtimeName + ' has already installed in runtime/' + runtimeName + ' folder!');
        if (--count <= 0) {
          console.log(count);
          cb();
        }
      }
    });
  } else {
    mkdirp('runtime');
    pjson.runtimes.map(function(runtimeName) {
      count++;
      git.runGitCmdInPath(['clone', 'https://github.com/fireball-x/' + runtimeName], 'runtime', function() {
        if (--count <= 0) {
          console.log('Runtime engines installation complete!');
          cb();
        }
      });
    });
  }
});

gulp.task('update-runtime', function(cb) {
  var count = 0;
  if (Fs.isDirSync('runtime')) {
    pjson.runtimes.map(function(runtimeName) {
      if (Fs.existsSync(Path.join('runtime', runtimeName, '.git'))) {
        count++;
        git.runGitCmdInPath(['pull', 'https://github.com/fireball-x/' + runtimeName, 'master'], Path.join('runtime', runtimeName), function() {
          git.runGitCmdInPath(['fetch', '--all'], Path.join('runtime', runtimeName), function() {
            console.log('Remote head updated!');
            if (--count <= 0) {
              console.log('Runtime engines update complete!');
              cb();
            }
          });
        });
      } else {
        console.warn('Runtime engine ' + runtimeName + ' not initialized, please run "gulp install-runtime" first!');
        return cb();
      }
    });
  } else {
    console.warn('Runtime folder not initialized, please run "gulp install-runtime" first!');
    cb();
  }
});

gulp.task('npm', ['rm-native-modules'], function(cb) {
  var cmdstr = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  var tmpenv = process.env;
  var os = require('os');
  tmpenv.npm_config_disturl = 'https://atom.io/download/atom-shell';
  tmpenv.npm_config_target = pjson['electron-version'];
  tmpenv.npm_config_arch = os.arch();
  tmpenv.HOME = Path.join(tmpenv.HOME, '.electron-gyp');
  var child = spawn(cmdstr, ['install'], {
    stdio: 'inherit',
    env: tmpenv
  });
  child.on('exit', cb);
});

gulp.task('bower', shell.task(['bower install']));

gulp.task('rm-native-modules', function(cb) {
  var del = require('del');
  var nativeModules = pjson['native-modules'];
  var nativePaths = nativeModules.map(function(filepath) { return 'node_modules/' + filepath; });
  console.log("Deleting existing native modules to make sure rebuild triggers.");
  del(nativePaths, function(err) {
    if (err) throw err;
    else cb();
  });
});

gulp.task('check-deps', function(cb) {
  var checkDeps = require('./utils/check-deps');
  checkDeps.checkSubmoduleDeps(pjson.submodules);
});
