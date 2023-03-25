const HomePage = require('./../pages/HomePage');
const LoginPage = require('./../pages/LoginPage');
const AppointmentBookingPage = require('./../pages/AppointmentBookingPage');
const AppointmentConfirmationPage = require('./../pages/AppointmentConfirmationPage');

describe('Book an appointment on katalon-demo-cura.herokuapp.com', () => {

  const homePage = new HomePage();

  it('Logs in and books an appointment', () => {

    // Visit the website and click make an appointment
    homePage.initiateAppointmentMaking();

    // Login
    const loginPage = new LoginPage();
    loginPage.userLogin('John Doe', 'ThisIsNotAPassword');

    // // Make an appointment
    const appointmentBookingPage = new AppointmentBookingPage();
    appointmentBookingPage.makeAnAppointment();

    // // Verify the appointment
    const appointmentConfirmationPage = new AppointmentConfirmationPage();
    appointmentConfirmationPage.verifyAppointment();
  });
});
