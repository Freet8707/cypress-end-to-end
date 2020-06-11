describe('Form - testing our form inputs', function () {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    it("add text to inputs and submit form", function() {
        cy.get('[data-cy="name"]')
        .type("Jeremy")
        .should("have.value", "Jeremy")
        cy.get('[data-cy="email"]')
        .type("freet8707@gmail.com")
        .should("have.value", "freet8707@gmail.com")
    })
})