import intercept from "../support/intercept";

describe("has a functioning People page", () => {
  beforeEach(() => {
    intercept();
    cy.visit("http://localhost:3000/people");
    cy.wait("@request");
  });

  it("can visit the people page", () => {
    cy.contains("Search for a Person");
    cy.get("input[type='text']").should("exist");
  });

  it("includes an element with a class of `.people`", () => {
    cy.get(".people").should("exist");
  });

  it("has the navigation bar", () => {
    cy.hasNavBar();
  });

  it("can navigate back to the home page from the people page", () => {
    cy.get("nav img").click();
    cy.contains("Welcome to GhibliApp");
  });

  it("can navigate from the home page to the people page", () => {
    cy.visit("http://localhost:3000");

    cy.get("a").contains("People").click();
    cy.url().should("eq", "http://localhost:3000/people");
    cy.contains("Search for a Person");
    cy.get("input[type='text']").should("exist");
  });

  it("can type in a persons name, search for the person, and show the results", () => {
    cy.get(".people input").type("San");
    cy.get(".people button").click();

    cy.contains("San");
    cy.contains("17");
    cy.contains("Female");
  });

  it("can type in an invalid name and return Not Found", () => {
    cy.get(".people input").type("Wrong Name");
    cy.get(".people button").click();

    cy.contains("Not Found");
  });
});
