class RegisterPage {
    visit() {
      cy.visit('/register');
    }

    fillName(value) {
        const field =  cy.get('input[formControlName=fullName]');
        field.clear();
        field.type(value);
        return this;
      }
  
    fillEmail(value) {
      const field =  cy.get('input[formControlName=email]');
      field.clear();
      field.type(value);
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get('input[formControlName=password]');
      field.clear();
      field.type(value);
      return this;
    }
  
    submit() {
      const button = cy.get('#registerButton')
      button.click();
      cy.url().should('be.equal', 'http://localhost:4200/restaurants')
    }

  }
  
  export default RegisterPage;