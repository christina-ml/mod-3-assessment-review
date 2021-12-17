import intercept from "../support/intercept";

describe("has a functioning Movies page", () => {
  beforeEach(() => {
    intercept();
    cy.visit("http://localhost:3000/movies");
    cy.wait("@request");
  });

  it("can visit the movies page", () => {
    cy.contains("Select a Movie");
    cy.get("select").should("exist");
    cy.get("select option").should("have.length.gte", 0);
  });

  it("includes an element with a class of `.movies`", () => {
    cy.get(".movies").should("exist");
  });

  it("has the navigation bar", () => {
    cy.hasNavBar();
  });

  it("can navigate back to the home page from the movies page", () => {
    cy.get("nav img").click();
    cy.contains("Welcome to GhibliApp");
  });

  it("can navigate from the home page to the movies page", () => {
    cy.visit("http://localhost:3000");

    cy.get("a").contains("Movies").click();
    cy.url().should("eq", "http://localhost:3000/movies");
    cy.contains("Select a Movie");
    cy.get("select option").should("have.length.gte", 0);
  });

  it("selects a movie and displays title and summary", () => {
    cy.get("select").select("Ponyo");

    cy.findAllByRole("heading").contains("Ponyo");
    cy.contains(
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human."
    );
  });

  it("selects the blank option and displays nothing", () => {
    cy.get("select").select("");
    cy.findAllByRole("heading").contains("Ponyo").should("not.exist");
    cy.contains(
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human."
    ).should("not.exist");
  });
});
