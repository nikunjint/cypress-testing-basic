describe('my first test', function()  {
    it('Verify title page positive', function ()  {
        cy.visit('https://www.daraz.com.np/',{failOnStatusCode: false})
        cy.get('#q').type("iphone")
        cy.get('.search-box__button--1oH7').click()
        cy.get('[data-item-id="107988223"] > .c3e8SH > .c5TXIP > .c2iYAv > .cRjKsc > a > .c1ZEkM').click()
    });
})

