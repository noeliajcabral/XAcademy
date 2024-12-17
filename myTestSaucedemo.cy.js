describe('SauceDemo', () => {
  // Definir los usuarios directamente en el código
  const usuarios = [
    { usuario: "standard_user", contraseña: "secret_sauce" },
    { usuario: "problem_user", contraseña: "secret_sauce" }
  ];

  // Función para realizar el proceso de checkout
  const realizarCheckout = (usuario) => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
      cy.log(`Iniciando sesión para el usuario ${usuario.usuario}`);
      cy.login(usuario.usuario, usuario.contraseña); // Usar el comando custom de login

      cy.url().should('include', '/inventory.html');
      cy.get('[data-test="title"]').should('contain', 'Products');
      cy.log('Página de inventario cargada');
    });

    it('should add a product to cart and complete checkout', () => {
      cy.log(`Agregando producto al carrito para el usuario ${usuario.usuario}`);

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
      cy.log('Producto agregado al carrito');

      cy.get('[data-test="shopping-cart-badge"]').click();
      cy.url().should('include', 'cart.html');
      cy.log('Accediendo al carrito');

      cy.get('#checkout').click();
      cy.log('Accediendo al formulario de checkout');

      cy.get('#first-name').type('Noelia');
      cy.get('#last-name').type('Cabral');
      cy.get('#postal-code').type('1900');
      cy.get('#continue').click();
      cy.log('Detalles del checkout completados');

      cy.get('#finish').click();
      cy.get('h2').contains('Thank you for your order!');
      cy.log('Compra finalizada con éxito');
    });
  };

  // Definir los tests para cada usuario
  usuarios.forEach((usuario) => {
    describe(`Checkout para el usuario ${usuario.usuario}`, () => {
      realizarCheckout(usuario);
    });
  });
});
