//
var calcUtil = require('../src/calc-util.js');

describe('test of add()', function() {
  it('1 + 2 = 3', function() {
    if (calcUtil.add(1, 2) !== 3) {
      throw new Error('fail');
    }
  });

  it('1 + 2 = 4', function() {
    if (calcUtil.add(1, 2) !== 4) {
      throw new Error('fail');
    }
  });
});
