var Path = require('fire-path');

module.exports = [
    'load-runtime-infos.js',
    'query-recent.js',
].map( function ( file ) {
    return Path.join( __dirname, file );
});
