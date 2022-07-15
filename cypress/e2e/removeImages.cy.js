describe('Remove images', () => {
  it('successfully', () => {
    cy.visit('./src/index.html')

    cy.get('img[src^="./img1"]')
      .next()
      .click()
      .prev()
      .should('have.attr', 'src', './empty.png')

    cy.get('img[src^="./img2"]')
      .next()
      .click()
      .prev()
      .should('have.attr', 'src', './empty.png')
  })
})