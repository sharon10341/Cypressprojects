describe('Checkbox functionality', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder = 'Username']").type('Admin')
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
    })
    it('handles checkbox scenerio 1', () => {
        cy.contains("Recruitment").click()
        cy.get(".orangehrm-header-container > button").click()
        cy.get("[type='checkbox']").check({
            force: true
        }).should('be.checked')


    })
    it("handles checkboxes scenerio 2", () => {
        cy.contains("Performance").click()
        cy.get(".oxd-topbar-body-nav-tab-item").eq(0).click()
        cy.get(".oxd-dropdown-menu").should("be.visible")
            .find("li")
            .eq(0)
            .should('have.text', 'KPIs')
            .click()

        cy.get("[type='checkbox']").check(["0", "1"], { force: true })
        cy.get("span[class='oxd-text oxd-text--span']")
            .should('have.text', '(2) Records Selected')

        cy.get("[type='checkbox']").check(["2", "4"], { force: true })
        cy.get("span[class='oxd-text oxd-text--span']")
            .should('have.text', '(4) Records Selected')


    })
})
