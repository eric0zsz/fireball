var Path = require('fire-path');

module.exports = [
  'native-modules.js'
].map( function ( file ) {
    return Path.join( __dirname, file );
});
