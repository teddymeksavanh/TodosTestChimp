module.exports = function () {
    'use strict';

    this.Given(/^I am on the homepage$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.url("http://localhost:3000");
        let _el = '.esgi-join';
        browser.waitForVisible(_el);
    });

    this.When(/^I click on the element "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        browser.click(arg1);
        let _el = '#at-field-email';
        browser.waitForVisible(_el);
    });

    this.When(/^I set my email "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        browser.setValue('input[name="at-field-email"]', arg1);
    });

    this.When(/^I set my password "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        browser.setValue('input[name="at-field-password"]', arg1);
    });

    this.When(/^I valid my password"([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        browser.setValue('input[name="at-field-password_again"]', arg1);
    });

    this.When(/^I submit "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        browser.click(arg1);
    });

    this.Then(/^I should see the element "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
    });
};
