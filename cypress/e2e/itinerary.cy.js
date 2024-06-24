describe('Checking Itinerary Page', () => {
  it('visits the itinerary page and complete form', () => {
 
    cy.visit('http://localhost:3000/itinerary');
    
    cy.get('input[name="Destination"]').type('South Africa');

    cy.get('input[name="Date"]').type('2024-03-21');
    cy.get('select[name="LengthOfStay"]').select('5');
    cy.get('input[name="TotalCost"]').type('5000');
    cy.get('input[name="AccommodationType"]').type('Hotel');
    cy.get('input[name="AccommodationName"]').type('Hotel Sol');
    cy.get('input[name="AccommodationCost"]').type('1000');
    cy.get('#rentalYes').check();
    cy.get('input[name="RentalType"]').type('car');
    cy.get('input[name="RentalCost"]').type('1000');
    cy.get("#saveBtn").click();

    
  });
});  
