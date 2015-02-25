var assert = require('chai').assert;
var request = require('supertest');
var app = require('../server');


describe('Route Testing', function() {
  it('should return index html', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        assert.isTrue(res.text.indexOf("</html>") > 0);
        done();
      });
  });
  it('should return about html', function(done) {
    request(app)
      .get('/about')
      .end(function(err, res) {
        assert.isTrue(res.text.indexOf('</html') > 0);
        done();
      })
  })
});

