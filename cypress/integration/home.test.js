describe("has a Home Page", () => {
  it("can visit the home page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("has a welcome message", () => {
    cy.get("body").should("contain.text", "Welcome to GhibliApp");
  });

  it("has a navigation that makes use of the `nav` element", () => {
    cy.hasNavBar();
  });
});
