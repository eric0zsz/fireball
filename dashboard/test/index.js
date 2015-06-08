var Path = require('fire-path');

module.exports = [
    'init.js',
].map( function ( file ) {
    return Path.join( __dirname, file );
});
