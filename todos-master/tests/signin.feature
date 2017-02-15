@watch
Feature: User signin

  As a human
  I want to loggin
  So I can use the app

  Scenario: Signin
    Given I am on the homepage
    When I click on the element ".esgi-join"
    When I set my email "test@gmail.com"
    When I set my password "123456"
    When I valid my password"123456"
    When I click on the element ".esgi-submit"
    Then I should see the element ".js-user-menu"
