const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let BigBrother;

  beforeEach(() => {
    if (!BigBrother) {
      BigBrother = sinon.spy(console, 'log');
    }
  });

  afterEach(() => {
    BigBrother.log.resetHistory();
  });

  after(() => {
    consoleLogSpy.restore(); // Restore console.log once after all tests
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(BigBrother.log.calledWith('The total is: 120')).to.be.true;
    expect(BigBrother.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(BigBrother.log.calledWith('The total is: 20')).to.be.true;
    expect(BigBrother.log.calledOnce).to.be.true;
  });
});
