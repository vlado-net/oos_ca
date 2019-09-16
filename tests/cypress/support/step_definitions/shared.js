import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

/* Scenario: Show the main page */
Given("I open the main page", () => {
  cy.visit("/");
});

Then(/^the title on the page is "([^"]*)"$/, check => {
  cy.title().should("include", check);
});

And('there are filters by "Name", "City" fields', () => {
  cy.get("form#filters").should("be.visible");
  cy.get("#filters")
    .invoke("text")
    .should("include", "Name")
    .and("include", "City");
});

And('with "Submit" and "Clear" buttons', () => {
  cy.get('#filters > [type="submit"]').contains("Submit");

  cy.get('#filters > [type="button"]').contains("Clear");
});

And('with 3 columns "Applied, "Interviewing", "Hired"', () => {
  cy.get(".App-column")
    .should("have.length", 3)
    .and("be.visible");
  cy.get(".App-column")
    .eq(0)
    .contains("Applied");
  cy.get(".App-column")
    .eq(1)
    .contains("Interviewing");
  cy.get(".App-column")
    .eq(2)
    .contains("Hired");
});

/* Scenario: Apply filter by Name with Submit button */
When("type some name in the Name input", () => {
  cy.get("#name").type("emma");
});

And("click on Submit button", () => {
  cy.get('#filters > [type="submit"]').click();
});

Then("I see filtered item by name", () => {
  cy.get(".App-container .CrewMemeber-name")
    .should("have.length", 1)
    .and("be.visible")
    .then(() => {
      cy.contains("emma");
    });
});

And("cancel the filter", () => {
  cy.get('#filters > [type="button"]').click();
});

/* Scenario: Apply filter by City pressing Enter button */
When("type some city in the City input", () => {
  cy.get("#city").type("liverpool");
});

And("press Enter button", () => {
  cy.get("#city").type("{enter}");
});

Then("I see filtered item by city", () => {
  cy.get(".App-container .CrewMemeber-name")
    .should("have.length", 1)
    .and("be.visible")
    .then(() => {
      cy.contains("liverpool");
    });
});

/* Scenario: Change a candidate status from Applied to Interviewing and then to Hired column */
When("click on action button in the candidate tile in Applied column", () => {
  cy.get(".App-column")
    .eq(0)
    .contains("Applied")
    .then(() => {
      cy.get(".CrewMember-container")
        .eq(0)
        .contains("lloyd gonzalez");

      cy.get(".CrewMember-toolbar > .CrewMember-up")
        .eq(0)
        .should("be.visible")
        .click();
    });
});

Then("this candidate tile moves to Interviewing column", () => {
  cy.get(".App-column")
    .eq(1)
    .contains("Interviewing")
    .then(() => {
      cy.get(".CrewMember-container")
        .eq(3)
        .contains("lloyd gonzalez");
    });
});

And("click on action button once more time", () => {
  cy.get(".App-column")
    .eq(1)
    .contains("Interviewing")
    .then(() => {
      cy.get(".CrewMember-container")
        .eq(3)
        .contains("lloyd gonzalez");

      cy.get(".CrewMember-toolbar > .CrewMember-up")
        .eq(3)
        .should("be.visible")
        .click();
    });
});

Then("the candidate tile moves to Hired column", () => {
  cy.get(".App-column")
    .eq(2)
    .contains("Hired")
    .then(() => {
      cy.get(".CrewMember-container")
        .last()
        .contains("lloyd gonzalez");
    });
});

/* Scenario: Change a candidate status from Hired to Interviewing and then to Applied column */
When("click on action button in the candidate tile in Hired column", () => {
  cy.get(".App-column")
    .eq(2)
    .contains("Hired")
    .then(() => {
      cy.get(".CrewMember-container")
        .eq(4)
        .contains("julia cunningham");

      cy.get(
        ":nth-child(3) > :nth-child(1) > .CrewMember-container > .CrewMember-toolbar > button"
      )
        .should("be.visible")
        .click();
    });
});

Then("the candidate tile moves to Interviewing column", () => {
  cy.get(".App-column")
    .eq(1)
    .contains("Interviewing")
    .then(() => {
      cy.get(".CrewMember-container")
        .eq(4)
        .contains("julia cunningham");
    });
});

And("tap on action button once more time", () => {
  cy.get(".App-column")
    .eq(1)
    .contains("Interviewing")
    .then(() => {
      cy.get(".CrewMember-container")
        .eq(4)
        .contains("julia cunningham");

      cy.get(
        ":nth-child(2) > :nth-child(1) > .CrewMember-container > .CrewMember-toolbar > :nth-child(1)"
      )
        .should("be.visible")
        .click();
    });
});

Then("the candidate tile moves to Applied column", () => {
  cy.get(".App-column")
    .eq(0)
    .contains("Applied")
    .then(() => {
      cy.get(".CrewMember-container")
        .first()
        .contains("julia cunningham");
    });
});