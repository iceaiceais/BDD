

const URL = 'https://demo.nopcommerce.com/'
const shopingCart = '#topcartlink'
const electonics = ':nth-child(1) > .category-item > .title > a'
const Apparel = ':nth-child(2) > .category-item > .title > a'
const digitalDown = ':nth-child(3) > .category-item > .title > a'
const E_camera = ':nth-child(1) >.sub-category-item > .title > a'
const E_phone = ':nth-child(2) >.sub-category-item > .title > a'
const added_cart = '.bar-notification success'
const assert_added_cart ='The product has been added to your shopping cart'



//add to cart nya nanti dibikin class per item cy.get per item.
// jadi nanti di file cy.js tinggal manggil element nya aja kalo mau add CharacterData. assertionnya juga sama
        
    

class checkoutForm{
    static billingAddress () {
        cy.get('#BillingNewAddress_FirstName').type('Mister')
        cy.get('#BillingNewAddress_FirstName').type('tester')
        cy.get('#BillingNewAddress_Company').type('PT.Quality Assurance')
    }
}

export default demo