const selector = require("../fixtures/selectors.json");
const data = require("../fixtures/data.json");

Cypress.Commands.add("login", (email, password) => {
    cy.get(selector.mail).type(email);
    cy.get(selector.pass).type(password);
    cy.get(selector.login).click();
});

Cypress.Commands.add("addNewHall", (nameNewHall) => {
    cy.contains("Создать зал").click();
    cy.get(selector.nameHall).type(nameNewHall);
    cy.get(selector.buttonAddHall).click();
});

Cypress.Commands.add("delNewHall", () => {
    cy.get(selector.hall).click();
    cy.get(selector.delHall).click();
});