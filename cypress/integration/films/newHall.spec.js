const data = require("../../fixtures/data.json");

it("Should add new hall", () => {
    cy.visit("/admin");
    cy.login(data.email, data.password);
    cy.addNewHall(data.newHall);
    cy.contains(data.newHall).should("be.visible");
    cy.delNewHall(data.newHall);
});