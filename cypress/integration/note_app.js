describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')// eslint-disable-line
    cy.contains('ivysaur')// eslint-disable-line
    cy.contains(// eslint-disable-line
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('pokemon page can be navigated to', function () {
    cy.contains('caterpie').click()// eslint-disable-line
    cy.contains('shield dust')// eslint-disable-line
  })
})
