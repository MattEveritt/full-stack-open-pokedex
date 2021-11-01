describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:8080')// eslint-disable-line
    cy.contains('ivysaur')// eslint-disable-line
    cy.contains(// eslint-disable-line
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})
