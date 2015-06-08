var Path = require('path');
var Fs = require('fire-fs');
var Chalk = require('chalk');
var SpawnSync = require('child_process').spawnSync;

var exePath = '';
var cwd = process.cwd();

if ( process.platform === 'darwin' ) {
    exePath = Path.join(cwd, 'bin/electron/Electron.app/Contents/MacOS/Electron');
}
else {
    exePath = Path.join(cwd, 'bin/electron/Electron.exe');
}

var files;
var indexFile = Path.join( cwd, 'test/index.js' );
var testDirs = [
    Path.join( cwd, './test/' ),
    Path.join( cwd, './editor-framework/test/' ),
    Path.join( cwd, './dashboard/test/' ),
];
var singleTestFile = process.argv[2];

// accept
if (singleTestFile) {
  if (Fs.isDirSync(singleTestFile)) { //if test a folder
    console.log(singleTestFile);
    console.log(singleTestFile.split('/').pop());
    if(singleTestFile.split('/').pop() === 'test') {
      singleTestFile = Path.join(singleTestFile, 'index.js');
    } else {
      singleTestFile = Path.join(singleTestFile, 'test', 'index.js');
    }
    indexFile = Path.join(cwd, singleTestFile);
    files = require(indexFile);
    files.forEach(function ( file ) {
        console.log( Chalk.magenta( 'Start test (' + file + ')') );
        SpawnSync(exePath, [cwd, '--test', file], {stdio: 'inherit'});
    });
  } else {
    if(singleTestFile.split('/').pop() === 'index.js') {
      indexFile = Path.join(cwd, singleTestFile);
      files = require(indexFile);
      files.forEach(function ( file ) {
          console.log( Chalk.magenta( 'Start test (' + file + ')') );
          SpawnSync(exePath, [cwd, '--test', file], {stdio: 'inherit'});
      });
    } else {
      singleTestFile = (singleTestFile + '.js').replace('.js.js', '.js');
      SpawnSync(exePath, [cwd, '--test', singleTestFile], {stdio: 'inherit'});
    }
  }
}
else {
    testDirs.forEach( function ( path ) {
        if ( !Fs.existsSync(path) ) {
            console.error( 'Path not found %s', path );
            return;
        }

        var indexFile = Path.join( path, 'index.js' );
        if ( Fs.existsSync(indexFile) ) {
            files = require(indexFile);
            files.forEach(function ( file ) {
                console.log( Chalk.magenta( 'Start test (' + file + ')') );
                SpawnSync(exePath, [cwd, '--test', file], {stdio: 'inherit'});
            });
        }
        else {
            Globby ( Path.join(path, '**/*.js'), function ( err, files ) {
                files.forEach(function (file) {
                    console.log( Chalk.magenta( 'Start test (' + file + ')') );
                    SpawnSync(exePath, [cwd, '--test', file], {stdio: 'inherit'});
                });
            });
        }
    });
}
