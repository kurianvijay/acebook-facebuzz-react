/// <reference types="Cypress" />

describe('Delete post', function () {

  const url = 'localhost:3000'

  beforeEach(() => {
    cy.visit(url)
  })

  it('post has a delete button', function () {
    cy.get('.post-item')
      .should('include.text', 'Delete')
  })


  it('when created, updates the feed', function () {
    cy.get('.post-form textarea').type('Hello test1234abcd')
    cy.get('.post-form button').click()
    cy.get('.Posts').should('include.text', 'Hello test1234abcd')
    cy.get('.post-item button').contains('Delete').click()
    cy.contains('Hello test1234abcd').should('not.exist')
    // cy.get('.Posts').should('not.include.text', 'Hello test1234abcd')
  })


})
