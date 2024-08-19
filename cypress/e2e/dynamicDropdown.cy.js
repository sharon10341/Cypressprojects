describe('Handling Dynamic Dropdowns functionality', () => {
    it('Dynamic dropdown', () => {
        cy.visit("https://www.ibomair.com/")
        cy.get("#select2-depPort-container").click()
        cy.get("input[aria-label='Search']").click().clear().type("A", { delay: 200 })
        //cy.get('li[id^="select2-depPort-result"][class*="select2-results__option--selected"]').contains('Abuja (ABV)')
        cy.get('li.select2-results__option')
            .contains('Abuja (ABV)')
            .should('be.visible')
            .click();
        cy.get("#select2-arrPort-container").click()
        cy.get("input[aria-label='Search']").click().clear().type("U", { delay: 200 })
        cy.get('li.select2-results__option')
            .contains('Uyo (QUO)')
            .should('be.visible')
            .click();













    })
})
