const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET homepage', () => {
  it('should return homepage with statusCode 200', (done) => {
    chai
        .request(app)
        .get('/')
        .end((error, res) => {
          expect(res).to.have.status(200);
          done();
        });
  });

  it('should return title: Hello homepage', (done) => {
    chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.title).to.equal('Hello homepage');
          done();
        });
  });
});
