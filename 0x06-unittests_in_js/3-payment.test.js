const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const BigBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(BigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(BigBrother.calculateNumber.callCount).to.be.equal(1);
    BigBrother.calculateNumber.restore();
  });
});
