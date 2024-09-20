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
    BigBrother.resetHistory();
  });

  after(() => {
    // Ensure to restore console.log
    if (BigBrother) {
      BigBrother.restore();
    }
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(BigBrother.calledWith('The total is: 120')).to.be.true;
    expect(BigBrother.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(BigBrother.calledWith('The total is: 20')).to.be.true;
    expect(BigBrother.calledOnce).to.be.true;
  });
});
