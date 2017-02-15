@watch
Feature: User signin

  As a human
  I want to loggin
  So I can use the app

  Scenario: Signin
    Given I am on the homepage
    When I click on the element ".esgi-signin"
    Then I should see the element "#at-field-email"
    When I fill the element "#at-field-email" with "test@gmail.com"
    When I fill the element "#at-field-password" with "123456"
    When I fill the element "#at-field-password_again" with "123456"
    When I submit "#at-pwd-form"
    Then I should see the element ".js-user-menu"
