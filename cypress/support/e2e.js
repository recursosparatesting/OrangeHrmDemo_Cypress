// ***********************************************************
// cypress/support/e2e.js
//
// ***********************************************************

import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

const app = window.top;
if (app && !app.document.head.querySelector('[data-fallback-style]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-fallback-style', '');
  app.document.head.appendChild(style);
}