describe('Login functionality', () => {
    it('Login Registered user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[name = 'username']").type('Gold004')
        cy.get("input[name='password']").type("test2020")
        cy.get("input[value='Log In']").click()
        cy.get("a[href='activity.htm?id=14343']").click()
        cy.get("#month").select(11)
        cy.get("#month").select("March")
        cy.get("#month").select("May")


    })
})
