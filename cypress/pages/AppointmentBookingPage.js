class AppointmentBookingPage{
  makeAnAppointment(){
    // // Make an appointment
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').check();
    cy.get('#radio_program_medicaid').check();
    cy.get('#txt_comment').type('This is a test appointment');
    cy.get('#txt_visit_date').click();
    cy.get('.datepicker-days .day:not(.old):not(.new):first').click();
    cy.get('#btn-book-appointment').click();
  }
}

export default AppointmentBookingPage;