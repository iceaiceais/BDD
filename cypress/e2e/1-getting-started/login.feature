Feature: login to apps
    as a valid user, i want to login into the apps

    Scenario: valid login
        Given i open login page
        When i submit login
        Then  i should see home page



