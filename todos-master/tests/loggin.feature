Feature: User loggin

  As a human
  I want to loggin
  So I can use the app

  Scenario: Loggin
    Given I am on the homepage
    When I click on the element ".esgi-login"
    When I set my email "test@gmail.com"
    When I set my password "123456"
    When I click on the element ".esgi-submit"
    Then I should see the element ".js-user-menu"
