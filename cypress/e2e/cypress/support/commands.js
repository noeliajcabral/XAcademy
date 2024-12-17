// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Comando custom de login
Cypress.Commands.add('login', (username, password) => {
  // Asegurarse de que estamos en la página de inicio de sesión antes de interactuar
  cy.url().should('include', 'saucedemo.com').and('not.include', '/inventory.html');

  // Esperar a que el campo de usuario esté visible y escribir el usuario
  cy.get('[data-test="username"]', { timeout: 10000 }).should('be.visible').type(username);
  cy.get('[data-test="password"]', { timeout: 10000 }).should('be.visible').type(password);

  // Hacer clic en el botón de inicio de sesión
  cy.get('[data-test="login-button"]').click();

  // Verificar que somos redirigidos a la página de inventario
  cy.url().should('include', '/inventory.html');
  cy.get('[data-test="title"]').should('contain', 'Products');  // Asegurar que el título de productos esté presente
});
