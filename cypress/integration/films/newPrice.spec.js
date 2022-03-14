const data = require("../../fixtures/data.json");
const selector = require("../../fixtures/selectors.json");

it("Should new price configuration", () => {
    cy.visit("/admin");
    cy.login(data.email, data.password);
    cy.get(selector.hallPrice).click();
    cy.get(selector.standart).clear().type(data.standart);
    cy.get(selector.vip).clear().type(data.vip);
    cy.get(selector.savePrice).click();
});