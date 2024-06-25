describe('Checking Contact Page', () => {
  it('visits the Contact page and complete form', () => {
    cy.visit('http://localhost:3000/contact');

    cy.get('input[name="firstName"]').type('Sam');
    cy.get('input[name="lastName"]').type('Martin');
    cy.get('input[name="mobile"]').type('+353 085 112 2233');
    cy.get('input[name="email"]').type('Sam.Marting@gmail.com');
    cy.get('textarea').type('I would like more information on the subscription packages');
    cy.get("#sendRequest").click();
  })
})