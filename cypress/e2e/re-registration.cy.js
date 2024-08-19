describe('registration functionality', () => {
    it('Register new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id = 'customer.firstName']").type('Kenneth')
        cy.get("input[id = 'customer.lastName']").type('Belle')
        cy.get("input[id='customer.address.street']").type('Meta')
        cy.get("input[id='customer.address.city']").type('melbourne')
        cy.get("input[id='customer.address.state']").type('VIC')
        cy.get("input[id='customer.address.zipCode']").type('1000')
        cy.get("input[id='customer.phoneNumber']").type('00000000')
        cy.get("input[id='customer.ssn']").type('11111111')
        cy.get("input[id='customer.username']").type('rcvtest')
        cy.get("input[id='customer.password']").type('test0000')
        cy.get("#repeatedPassword").type('test0000')
        cy.get("input[value='Register']").click()
        cy.get("span[id='customer.username.errors']").should('have.text', 'This username already exists.')
        //cy.get("span[id='customer.username.errors']").contains('This username already exists')



    })
})
