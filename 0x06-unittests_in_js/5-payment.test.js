const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the correct total for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct total for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
