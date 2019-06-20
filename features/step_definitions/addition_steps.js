const { Given, When, Then } = require('cucumber');
const assert = require('assert')

//// Your step definitions /////
Given(/^I have number (\d+) in calculator$/, async function (num) {
    this.setTo(num);
});

When(/^I entered number (\d+)$/, async function (num) {
    this.incrementBy(num);
});

Then(/^I should see result (\d+)$/, async function (result) {
    assert.equal(this.variable, parseInt(result));
});