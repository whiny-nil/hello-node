var should = require("should");
var expect = require("expect.js")

describe('sanity', function() {
  describe("truth", function() {
    it("is true", function() {
      true.should.equal(true);
    });
  });

  describe("false", function() {
    it("is false", function() {
      expect(false).to.be(false);
    });
  });
});
