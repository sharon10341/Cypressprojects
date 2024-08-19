describe('registration functionality', () => {
    it('Register new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id = 'customer.firstName']").type('Dennis')
        cy.get("input[id = 'customer.lastName']").type('Zayan')
        cy.get("input[id='customer.address.street']").type('Meta')
        cy.get("input[id='customer.address.city']").type('melbourne')
        cy.get("input[id='customer.address.state']").type('VIC')
        cy.get("input[id='customer.address.zipCode']").type('1100')
        cy.get("input[id='customer.phoneNumber']").type('00020100')
        cy.get("input[id='customer.ssn']").type('11103109')
        cy.get("input[id='customer.username']").type('Gold004')
        cy.get("input[id='customer.password']").type('test2020')
        cy.get("#repeatedPassword").type('test2020')
        cy.get("input[value='Register']").click()






    })
})
