describe('End User App', () => {
  it('Should Have Title Page', () => {
    cy.visit('/')
    cy.contains('Foodie Inc')
    cy.contains('Login')
    cy.contains('Create Account')
  })
})
