class HomePage{
  initiateAppointmentMaking(){
    // Visit the website
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    // Initiate the appointment
    cy.get('#btn-make-appointment').click();
  }
}

export default HomePage;