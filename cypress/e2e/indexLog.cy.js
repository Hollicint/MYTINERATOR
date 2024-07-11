describe('Checking index Page', () => {
    it('visits the index page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#emailLogin').type('shane18280@gmail.com');
      cy.get('#pwordLogin').type('1111');
      cy.get('#submitLoginBtn').click();
    })
  })