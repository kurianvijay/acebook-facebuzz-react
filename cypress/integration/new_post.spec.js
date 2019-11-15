/// <reference types="Cypress" />

describe('New post', function () {

  const url = 'localhost:3000'

  beforeEach(() => {
    cy.visit(url)
  })

  it('form has a submit button', function () {
    cy.get('.post-form')
      .should('have.text', 'Add Post')
  })

  it('form has a text-area', function () {
    cy.get('.post-form')
      .should('include.html', 'textarea')
  })

  it('form textarea resets contents after post submitted', function() {
    cy.get('.post-form textarea').type('Hello')
    cy.get('.post-form button').click()
    cy.get('.post-form textarea').should('have.value', '')
  })

  it('when created, updates the feed', function () {
    cy.get('.post-form textarea').type('Hello test1234abcd')
    cy.get('.post-form button').click()
    cy.get('.Posts').should('include.text', 'Hello test1234abcd')
  })


})
