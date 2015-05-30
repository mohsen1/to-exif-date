var convert = require('./');

var assert = require('assert');

describe('Dates', function() {
  it('should convert date to EXIF date', function() {
    var date = new Date(1433025490757);

    assert.equal(convert(date), '2015:05:30 15:38:10');
  });
});