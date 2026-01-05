
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

  submitLogin() {
    const user = Cypress.env('USER_NAME') || 'admin_por_defecto';
    const pass = Cypress.env('USER_PASS') || 'password_por_defecto';
    this.typeUsername(user);
    this.typePassword(pass);
    this.clickLogin();
  }
}

export const loginPage = new LoginPage();