// Test Case: Search for an Article on Wikipedia

// Visit the Wikipedia homepage.
// Interact with the language dropdown menu and select a language(e.g., English).
// Type a search query(e.g., "Cypress Testing") into the search bar.
// Select the correct search suggestion from the dynamic dropdown list.
// Assert that the search results page loads and that the title of the page contains the search query.

describe('Wikipedia search functionality', () => {
    it('Search for An article on wikipedia', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchLanguage").select('en')
        // cy.get("#searchLanguage").click()
        //     .contains("English")
        //     .should("be.visible")
        //     .click()
        cy.get("#searchInput").type("Cypress Testing")
        cy.get(".sprite.svg-search-icon").click()
        cy.get("div[class='mw-search-result-heading'] a[title='Cypress (software)']").click()
        cy.url().should('include', 'Cypress')
        cy.title().should('include', 'Cypress')






    })



})