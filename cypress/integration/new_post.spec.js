/// <reference types="Cypress" />

describe('Post form', function () {

  const url = 'localhost:3000/'

  beforeEach(() => {
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

  it('resets its contents after a post has been submitted', function() {
    cy.get('.post-form textarea').type('Hello')
    cy.get('.post-form button').click()
    cy.get('.post-form textarea').should('have.value', '')
  })

})
