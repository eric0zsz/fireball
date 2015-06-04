
describe('NativeModules', function() {
  it('should require native module successfully', function( done ) {
      var fontmng = require('font-manager');
      expect(fontmng).to.be.ok;
      done();
  });
});
