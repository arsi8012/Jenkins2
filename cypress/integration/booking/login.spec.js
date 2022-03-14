const data = require("../../fixtures/data.json");

it("Should open the main page", () => {
    cy.visit("/");
    cy.contains("Идёмвкино").should("be.visible");
});

it("Should successfully login admin", () => {
    cy.visit("/admin");
    cy.login(data.email, data.password);
    cy.contains("Управление залами").should("be.visible");
});