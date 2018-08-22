const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const server = require('../../server');

describe('Phrases API integration tests', () => {
  it('returns a success code and the right data', (done) => {
    request(server)
      .get('/phrases/test_text')
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        expect(res.body.text).to.equal('test_text');
        done()
      });
  });
});
