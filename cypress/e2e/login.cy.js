import { loginPage } from './page-objects/LoginPages'

describe('Pruebas de Login con POM', () => {
  
  beforeEach(() => {
    cy.visit('/');
  });

  it('Debería iniciar sesión con credenciales válidas', () => {
    loginPage.submitLogin();
    
    cy.url().should('include', '/dashboard');
  });


});