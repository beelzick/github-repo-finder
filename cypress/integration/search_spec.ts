it('user can search for repo', () => {
    cy.visit('/')
    cy.findByRole('textbox', { name: /search/i }).type('react')
    cy.findByText(/made by discountry/i).should('be.visible')
})