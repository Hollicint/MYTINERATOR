describe('Checking index Page', () => {
    it('visits the index page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#regLink').click();
      cy.get('#nameReg').type('shane');
      cy.get('#emailReg').type('shane18280@gmail.com');
      cy.get('#pwordReg').type('1111');
      cy.get('#submitRegBtn').click();
    })
  })