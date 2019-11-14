describe('New User form', () => {
  const url = 'localhost:3000/';

  context('no user logged in', () => {
    beforeEach(() => {
      cy.visit(url);
      // TODO logout
    });

    it(' hides current user details', () => {
      cy.get('.UserProfileWrapper')
        .should('be.hidden');
    });

    it('shows new user registration form', () => {
      cy.get('.registation-form')
        .should('not.be.hidden');
    });

    it('creates a new user', () => {
      cy.get('.registration-form').within(($form) => {
        cy.get('input[name="firstName"]').type('TestFirstName');
        cy.get('input[name="lastName"]').type('TestLastName');
        cy.get('input[name="username"]').type('TestUserName');
        cy.get('input[name="email"]').type('test@email.com');
        cy.get('input[name="password"]').type('password');
        cy.get('input[name="confirmPassword"]').type('password');
        cy.root().submit();
      });

      cy.expect('.UserProfileWrapper').to.contain('TestUserName');
    });
  });

  context('User already logged in', () => {
    beforeEach(() => {
      cy.visit(url);
      // TODO login
    });

    it(' shows current user details', () => {
      cy.get('.UserProfileWrapper')
        .should('not.be.hidden');
    });

    it('hides new user registration form', () => {
      cy.get('.registation-form')
        .should('be.hidden');
    });

  });
});