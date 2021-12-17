import intercept from "../support/intercept";

describe("has a functioning Locations page", () => {
  beforeEach(() => {
    intercept();
    cy.visit("http://localhost:3000/locations");
    cy.wait("@request");
  });

  it("can visit the locations page", () => {
    cy.contains("List of Locations");
    cy.get("button").contains("Show Locations");
  });

  it("includes an element with a class of `.locations`", () => {
    cy.get(".locations").should("exist");
  });

  it("has the navigation bar", () => {
    cy.hasNavBar();
  });

  it("can navigate back to the home page from the locations page", () => {
    cy.get("nav img").click();
    cy.contains("Welcome to GhibliApp");
  });

  it("can navigate from the home page to the locations page", () => {
    cy.visit("http://localhost:3000");

    cy.get("a").contains("Locations").click();
    cy.url().should("eq", "http://localhost:3000/locations");
    cy.contains("List of Locations");
    cy.get("button").contains("Show Locations");
  });

  it("shows all locations and additional information when the Show Locations button is clicked", () => {
    cy.get("button").contains("Show Locations").click();

    cy.get(".locations li").should("have.length", 24);
    cy.get(".locations li").contains("Irontown");
    cy.get(".locations li").contains("The Marsh House");
    cy.get(".locations li").contains("Pazu's Mines");
    cy.get(".locations li").contains("Forest");
    cy.get(".locations li").contains("Ingary");
  });

  it("changes the button to Hide Locations", () => {
    cy.get("button").contains("Show Locations").click();
    cy.get("button").contains("Hide Locations");
  });

  it("hides all locations when Hide Locations is clicked", () => {
    cy.get("button").contains("Show Locations").click();
    cy.get("button").contains("Hide Locations").click();
    cy.get(".locations li:visible").should("have.length", 0);
  });

  it("changes the button to Show Locations", () => {
    cy.get("button").contains("Show Locations").click();
    cy.get("button").contains("Hide Locations").click();
    cy.get("button").contains("Show Locations");
  });
});
