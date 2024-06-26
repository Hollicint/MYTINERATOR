  it('Checking destination Page', {includeShadowDom: true}, () => {
    cy.visit('http://localhost:3000/destination')
    cy.get('#departure').type('Dublin')
    cy.get('#destination').type('London')
    cy.get('#departure_date')
      .type("2024-07-22")
      cy.get('#oneWayBtn').click()

  
  })