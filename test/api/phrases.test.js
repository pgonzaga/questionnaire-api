const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const server = require('../../server');

describe('Phrases API integration tests', () => {
  it('returns a success code and the right data using a word as text param', (done) => {
    request(server)
      .get('/phrases?text=test_text')
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        expect(res.body.text).to.equal('test_text');
        done()
      });
  });

  it('returns a success code and the right data using a sentence as text param', (done) => {
    request(server)
      .get('/phrases?text=test sentence with many chars and spaces')
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        expect(res.body.text).to.equal('test sentence with many chars and spaces');
        done()
      });
  });
});
