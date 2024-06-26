describe('Checking destination Page', () => {
    it('visits the destination page', () => {
      cy.visit('http://localhost:3000/destination')
      cy.get('#location').type('Dublin')
      cy.get('#destBtn').click()
    })
  })