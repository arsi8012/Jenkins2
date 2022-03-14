const data = require("../../fixtures/data.json");
const selector = require("../../fixtures/selectors.json");
const seat = require("../../fixtures/seats.json");

it("Should book movie tickets", () => {
    cy.visit("/admin");
    cy.login(data.email, data.password);
    cy.get(selector.chooseHall).click();
    cy.get(selector.rows).clear().type(seat.rows);
    cy.get(selector.places).clear().type(seat.places);
    cy.get(selector.closeHall).click();
    cy.get(selector.closeButton).click();
    cy.get(selector.saveButton).click();
    cy.get(selector.settingsSave).click();
    cy.contains("Изменения сохранены").should("be.visible");
});