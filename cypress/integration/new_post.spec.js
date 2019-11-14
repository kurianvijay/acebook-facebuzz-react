/// <reference types="Cypress" />

describe('Post form', function () {

  beforeEach(() => {
    const url = 'localhost:3000/'
    cy.visit(url)
  })

  it('has a submit button', function () {
    cy.get('.post-form')
      .should('have.text', 'Add Post')
  })

  it('has a text-area', function () {
    cy.get('.post-form')
      .should('include.html', 'textarea')
  })
})