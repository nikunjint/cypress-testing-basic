/// <reference types="Cypress"/>
describe('my first test', function()  {
    it('Verify title page positive', function ()  {
        cy.visit('https://www.amazon.com/',{failOnStatusCode: false})
        cy.title().should('eq','Amazon.com. Spend less. Smile more.')
        cy.get('#twotabsearchtextbox').type("iphone")
        cy.get('#nav-search-submit-button').click()
        cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click()
        cy.get(".div[class='title--3qM6_ title--X01QH titleAnchor--2TGNn doubleLinesTitle--ATRHO']").click()
    });

    it('Verify title page negative', function ()  {
        cy.visit('https://www.amazon.com/')   //open url
        cy.title().should('eq','Amazon.comm. ') // get tile and check assertion
    

    });

    
})
