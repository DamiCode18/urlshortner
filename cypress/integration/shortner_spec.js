describe('My First Test', () => {
    it('Visits Url shortner website', () => {
      cy.visit('/')
      cy.get('a')
    })
  })