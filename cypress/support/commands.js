// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("Register", (email,password) =>{
    cy.visit('https://demo.nopcommerce.com/register')
    cy.get('.male').click();
    cy.get('#FirstName').type('Mister');
    cy.get('#LastName').type('tester3')
    cy.get('[name=DateOfBirthDay]').select('7')
    cy.get('[name="DateOfBirthMonth"]').select('January')
    cy.get('[name="DateOfBirthYear"]').select('1996')
    cy.get('#Email').type(email)
    cy.get('#Company').type('PT.Quality Assurance ')
    cy.get('#Newsletter').check()
    cy.get('#Password').type(password)
    cy.get('#ConfirmPassword').type('password123')
    cy.get('#register-button').click().clearAllLocalStorage()
    cy.get('.result').contains('Your registration completed')
    cy.get('.header-logo > a > img').should('be.visible')
    cy.get('.buttons > .button-1').click()
    cy.get('.topic-block-title > h2').should('be.visible')
})