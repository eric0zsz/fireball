var Path = require('fire-path');

module.exports = [
    'editor-app.js',
    'query-recent.js',
].map( function ( file ) {
    return Path.join( __dirname, file );
});
