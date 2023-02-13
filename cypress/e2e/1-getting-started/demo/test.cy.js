/// <reference types="cypress" />

describe('calon script', ()=>{
    it('add to chart', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.nth-child(1) > a >').click()
        
    })
})