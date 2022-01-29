const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /vets', () => {
  it('should return statusCode 200 and array of vets', (done) => {
    chai
        .request(app)
        .get('/vets')
        .end((err, res) => {
          expect(res).to.have.status(200);
          res.body.should.to.be.a('object');
          res.body.vets.should.have.a('array');
          done();
        });
  });
});
