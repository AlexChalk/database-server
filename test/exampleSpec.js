var expect = chai.expect;

describe('test', function() {
  it('runs a very basic test', function() {
    expect(1 + 1).to.equal(2);
  });
  it('has mocking abilities', function() {
    sinon.spy(console, 'log');
    console.log('hey');
    expect(console.log).to.have.been.calledOnce;
  });
});
