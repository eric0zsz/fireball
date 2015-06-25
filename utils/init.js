var exec = require('child_process').exec;
var packages = [
    'gulp',
    'gulp-sequence@0.3.2',
    'gulp-shell@0.4.1',
    'fire-fs@0.1.5',
    'mkdirp@0.5.1',
    'gulp-download-fire-shell',
    'del',
    'chalk'
];

var proc = exec('npm install ' + packages.join(' '));
proc.stdout.on('data', function(data) {
    console.log(data.toString());
});
proc.stderr.on('data', function(data) {
    console.log(data.toString());
});
proc.on('exit', function() {
    console.log('Gulp task dependency installed successful! \n Please run "gulp bootstrap" to setup development environment.');
});
