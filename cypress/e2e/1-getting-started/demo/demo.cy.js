
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps/index";
import demo from "./demo";

Given ('i have successfully registered as a user', () =>{
    cy.Register('admin', 'admin123')
})

And ('add product to cart', ()=>{
    cy.get(electonics).trigger('mouseover').click()
    cy.get(E_camera).click()
    cy.get('#button-2 product-box-add-to-cart-button').click()
    cy.get('.variant-name').should('have.text', 'Nikon D5500 DSLR - Black')
    cy.get('#add-to-cart-button-14').click()
    cy.get(added_cart).should('contain', assert_added_cart)
})