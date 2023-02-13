Feature: End to End Check Out Payment as a guest

    As a valid user, i want to add product to cart list and make a Payment

Scenario: End to End process check out payment
Given i have successfully registered as a user
And add product to cart
Then i go to shoping cart 
When I click checkout button
And  i sign in as user to checkout as a registered user
And i Fill in the checkout form
And i confirm the checkout 
Then i should successfully checkout the payment