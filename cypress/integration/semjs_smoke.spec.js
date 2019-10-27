describe("Initial smoke test for SEM.js", function() {
  beforeEach(function() {
    cy.visit("/")
  })

  it("Successfully loads", function() {
    cy.contains("Welcome to your new Gatsby site")
  })

  it("Sponsors page loads", function() {
    cy.contains("sponsors").click()

    cy.contains("SEM.js Sponsorships")
  })
})
