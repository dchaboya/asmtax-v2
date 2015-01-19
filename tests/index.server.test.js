var request = require('supertest');
var app = require('../server');


describe('GET /', function() {
  it('respond with json', function() {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});