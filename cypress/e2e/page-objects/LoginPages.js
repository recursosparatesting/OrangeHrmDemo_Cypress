
class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.contains('Invalid credentials')
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(user, pass) {
    this.typeUsername(user);
    this.typePassword(pass);
    this.clickLogin();
  }

  validarMensajeError() {
    this.elements.errorMessage()
      .should('be.visible');
  }

}

export const loginPage = new LoginPage();