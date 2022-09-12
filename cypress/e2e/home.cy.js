/// <reference types="cypress" />

context("Home", () => {
  beforeEach(() => { cy.visit("http://localhost:3000"); });

  it("should display fe eng in hero section",
     () => { cy.get("h1").contains("front-end engineer"); });
});
