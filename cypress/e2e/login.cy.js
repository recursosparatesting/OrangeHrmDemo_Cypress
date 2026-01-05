import { loginPage } from './page-objects/LoginPages'

describe('Pruebas de Login Dinámico', () => {
    const navegador = Cypress.browser.name;
    const usuario = Cypress.env('USER_NAME') || 'Admin';
    const password = Cypress.env('USER_PASS') || 'admin123';
    const tipoPrueba = Cypress.env('TIPO_PRUEBA') || 'credencialesCorrectas';
  

    beforeEach(() => {
    cy.visit('/');
  });



    console.log(`Ejecutando en: ${navegador} | Usuario: ${usuario}`);

  const conCredencialesCorrectas = () => {

    cy.log('--- CONFIGURACIÓN DE LA PRUEBA ---');
    cy.log(`🌐 Navegador: ${navegador}`);
    cy.log(`👤 Usuario: ${usuario}`);
    cy.log(`🔑 Password: ${password}`);
    cy.log(`🔑 Prueba: ${tipoPrueba}`);

    loginPage.submitLogin(usuario,password);
    
    cy.url().should('include', '/dashboard');
  };


  const conCredencialesIncorrectas = () => {

    cy.log('--- CONFIGURACIÓN DE LA PRUEBA ---');
    cy.log(`🌐 Navegador: ${navegador}`);
    cy.log(`👤 Usuario: ${usuario}`);
    cy.log(`🔑 Password: ${password}`);
    cy.log(`🔑 Prueba: ${tipoPrueba}`);

    loginPage.submitLogin(usuario,password);
    loginPage.validarMensajeError();
  };


  // CASO 1: Ejecución condicional
  if (tipoPrueba === 'credencialesCorrectas') {
    it('Caso 1: Login Exitoso', conCredencialesCorrectas);
  }

  // CASO 2: Ejecución condicional
  if (tipoPrueba === 'credencialesIncorrectas') {
    it('Caso 2: Validacion Login Fallido', conCredencialesIncorrectas);
  }



  console.log('Valor de TIPO_PRUEBA recibido:', Cypress.env('TIPO_PRUEBA'));
  
});