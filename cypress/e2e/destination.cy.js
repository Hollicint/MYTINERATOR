describe('Checking Itinerary Page', () => {
    it('visits the itinerary page', () => {
      cy.visit('http://localhost:3000/destination')
      cy.get('#location').type('Dublin')
      cy.get('#destBtn').click()
    })
  })