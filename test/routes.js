const assert = require('assert/strict');
const supertest = require('supertest');
const app = require('../app');
const { JSDOM } = require('jsdom');

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
  it('should have the correct heading', async function() {
    const response = await supertest(app)
      .get('/');

    const { document } = (new JSDOM(response.text)).window;

    assert.equal(document.querySelector('h1').textContent, 'Express');

  });
});
