var Path = require('fire-path');

module.exports = [
].map( function ( file ) {
    return Path.join( __dirname, file );
});
