describe('Admin Web App', () => {
  
    beforeEach(()=>{
      cy.visit('/register')
    })
  
    it('should have correct labels', () => {
        cy.contains('label', 'Name')
        cy.contains('label', 'Email')
        cy.contains('label', 'Password')
    })

    it('should register with name, email and password', function() {
        cy.get('input[formControlName=fullName]').type("Shawn")
        cy.get('input[formControlName=email]').type("shawn@example.com")
        cy.get('input[formControlName=password]').type("shawn123")
        cy.get('#registerButton').click()
        cy.get('.navbar-nav li').should('have.length', 5)  
    });

    it('should redirect end user to home page if they provide correct credentials', () => {
        cy.get('input[formControlName=fullName]').type("Shawn")
        cy.get('input[formControlName=email]').type("shawn@example.com")
        cy.get('input[formControlName=password]').type("shawn123")
        cy.get('#registerButton').click()
        cy.url().should('be.equal', 'http://localhost:4200/restaurants')
    })
  
  })