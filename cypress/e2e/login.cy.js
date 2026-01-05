import { loginPage } from './page-objects/LoginPages'

describe('Pruebas de Login Dinámico', () => {
  
  it('Debería loguearse con las credenciales configuradas', () => {
    const navegador = Cypress.browser.name;
    const usuario = Cypress.env('USER_NAME') || 'No definido';
    const password = Cypress.env('USER_PASS') ? '******' : 'No definido';

    cy.log('--- CONFIGURACIÓN DE LA PRUEBA ---');
    cy.log(`🌐 Navegador: ${navegador}`);
    cy.log(`👤 Usuario: ${usuario}`);
    cy.log(`🔑 Password: ${password}`);

    console.log(`Ejecutando en: ${navegador} | Usuario: ${usuario}`);

    cy.visit('/');
    loginPage.submitLogin();
    
    cy.url().should('include', '/dashboard');
  });
  
});