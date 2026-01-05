import { loginPage } from './page-objects/LoginPages'

describe('Pruebas de Login con POM', () => {
  
  beforeEach(() => {
    cy.visit('/');
  });

  it('Debería iniciar sesión con credenciales válidas', () => {
    loginPage.submitLogin('Admin', 'admin123');
    
    cy.url().should('include', '/dashboard');
  });

  it('Debería mostrar error con credenciales inválidas', () => {
    loginPage.typeUsername('error_user');
    loginPage.typePassword('wrong_pass');
    loginPage.clickLogin();

    loginPage.elements.errorMessage().should('be.visible');
  });
});