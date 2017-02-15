import { jQuery } from 'jquery';

module.exports = function () {
    'use strict';

    this.Given(/^I am on the homepage$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.url("http://localhost:3000");
        let _el = '.esgi-signin';
        browser.waitForVisible(_el);
    });

    this.When(/^I click on the element "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        browser.click('.esgi-signin');
    });

    this.Then(/^I should see the element "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForVisible('input[name="at-field-email"');
    });

    this.When(/^I fill the element "([^"]*)" with "([^"]*)"$/, function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
    });

    this.When(/^I fill the element "([^"]*)" with "([^"]*)"$/, function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
    });

    this.When(/^I fill the element "([^"]*)" with "([^"]*)"$/, function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
    });

    this.When(/^I submit "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
    });

    this.Then(/^I should see the element "([^"]*)"$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
    });
};
