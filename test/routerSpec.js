var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../app.js').app;
var pairs = require('../app.js').pairs;
chai.use(chaiHttp);

describe('root page', function() {
  it('loads successfully', function(done) {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });
  it('stores params', function(done) {
    chai.request(app)
      .get('/set?john=jam')
      .end(function (err, res) {
        expect(pairs['john']).to.equal('jam');
        done();
      });
  });
  it('retrieves params', function(done) {
    chai.request(app)
      .get('/set?john=james')
      .then(function () {
        chai.request(app)
          .get('/get?key=john')
          .end(function (err, res) {
            expect(res.text).to.equal('james');
            done();
          });
      });
  });
});
