const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the vertical word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'A', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'N', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'D', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'R', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'E', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'W', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ANDREW')

    assert.isTrue(result);
  });

  it("should return true if the backword horizontal word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'A', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'N', 'V', 'R', 'G'],
      ['W', 'E', 'R', 'D', 'N', 'A', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'R', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'Z', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'W', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ANDREW')

    assert.isTrue(result);
  });

  it("should return false if there is empty word or string", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'A', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'N', 'V', 'R', 'G'],
      ['W', 'E', 'R', 'D', 'N', 'A', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'R', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'Z', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'W', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '')

    assert.isFalse(result);
  });
  
  it("should return false if the array is empty", function() {
    const result = wordSearch([], 'ANDREW')
    assert.isFalse(result);
  });


  

});
