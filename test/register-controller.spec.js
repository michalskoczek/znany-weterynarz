const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

describe('GET /register', () => {
  it('should return statusCode 200', (done) => {
    chai
      .request(app)
      .get('/register')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return title - Register page', (done) => {
    chai
      .request(app)
      .get('/register')
      .end((err, res) => {
        res.body.should.be.a('object');
        expect(res.body.title).to.equal('Register page');
        done();
      });
  });
});
