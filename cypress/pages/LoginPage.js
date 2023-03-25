class LoginPage{
  userLogin(username, password){
    // cy.get('#txt-username').type('John Doe');
    // cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#txt-username').type(username);
    cy.get('#txt-password').type(password);
    cy.get('#btn-login').click();
  }
}

export default LoginPage;