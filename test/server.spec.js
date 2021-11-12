const app = require('../app');
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

const should = chai.should();
chai.use(chaiHttp);

describe('Homepage route', () => {
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
