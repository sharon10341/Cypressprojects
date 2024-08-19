describe('clear text demo', () => {
    it('clears text demo', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[name = 'username']").type('Gold004')
        cy.wait(1000)
        cy.get("input[name = 'username']").clear()





    })
})
