describe('AutomationTestingOnline', {testIsolation :false },() => {
    it("Ingresar en la página", () => {
        cy.visit("https://automationintesting.online/");
      });

      it("Verificar la info del hotel", () => {
        cy.get("p").contains("Shady Meadows B&B")
        cy.get("p").contains("The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S")
        cy.get("p").contains("012345678901")
        cy.get("p").contains("fake@fakeemail.com")
      });

      it("Verificar una imagen de la fauna", () => {
        cy.get(':nth-child(5) > :nth-child(1) > .row > .col-sm-3 > .img-responsive').should('be.visible')
      });
      
      it("Verificar texto de la descripción del hotel", () => {     
      cy.get("p").contains("Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.")
    });    
  })