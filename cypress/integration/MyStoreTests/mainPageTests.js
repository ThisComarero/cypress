/// <reference types="Cypress" />
beforeEach(() => {
    cy.visit('/')
    cy.title().should("eq", "My Store")
})

describe('Main page tests', () => {
    it('Open Shipping cart', () => {
        cy.get("a[title='View my shopping cart']").click()
        cy.title().should("eq", "Order - My Store")
        cy.get(".alert-warning").should("be.visible")
    })

    it('Should not sign it without providing valid account data', () => {
        cy.get(".login").click()
        cy.title().should("eq", "Login - My Store")
        cy.get("#SubmitLogin").click()
        cy.get("div.alert.alert-danger").should("be.visible")
    })
})