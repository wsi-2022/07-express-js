const assert = require('assert');
const supertest = require('supertest');
const app = require('../app');

describe('GET /', function() {
  it('should have status code 200', function(done) {
    supertest(app)
      .get('/')
      .expect(200, done)
  });
  it('should respond with text/html', function(done) {
    supertest(app)
      .get('/')
      .expect('Content-Type', /text\/html/, done)
  });
});
