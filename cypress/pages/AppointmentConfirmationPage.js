class AppointmentConfirmationPage{
  verifyAppointment(){
    // // Verify the appointment
    cy.contains('Appointment Confirmation').should('be.visible');
  }
}

export default AppointmentConfirmationPage;