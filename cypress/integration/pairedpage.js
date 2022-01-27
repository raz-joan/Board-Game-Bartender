describe('Board Game Bartender Paired Page DOM', () => {
    it('should have a Header component', () => {
        cy.visit('http://localhost:3000/#/b7EIdXzESo/13194')  

        cy.get('[data-cy=header')
            .should('exist')
    })

    it('should have show the words Your Perfect Pairing at the top of the page', () => {
        cy.visit('http://localhost:3000/#/b7EIdXzESo/13194')  

        cy.get('h2')
            .contains('Your Perfect Pairing!')
    })

    it('should show the add to favorites button', () => {
        cy.visit('http://localhost:3000/#/b7EIdXzESo/13194')  

        cy.get('[data-cy=favorites-button]')
    })

    it('should allow the user to refresh the page and see the same information as before', () => {
        cy.visit('http://localhost:3000/#/b7EIdXzESo/13194')  

        cy.reload().wait(2000)

        .get('[data-cy=game-name]')
        .contains('Starfarers of Catan')

        .get('[data-cy=drink-name]')
        .contains('Damned if you do')
    })
    
    it('should allow the user to access the paired page after clicking the Pair Button', () => {
        cy.visit('http://localhost:3000/')  

          .get('input').eq(0)
          .type('Catan')

          .get('input').eq(1)
          .type('Tequila')

          .get('[data-cy=pairing-form] [data-cy=pair-button]')
          .click()
          
          .wait(2000)
          
          .get('[data-cy=game-name]')
          .contains('Catan')

          .get('p')
          .contains('Tequila')
    })

    it('should allow the user to visit a specific URL and see data based on the URL path', () => {
        cy.visit('http://localhost:3000/#/RCDJAQKpLn/11013').wait(2000)
            
        .get('[data-cy=game-name]')
        .contains('Catan: 3D Edition')

        .get('[data-cy=drink-name]')
        .contains('Alaska Cocktail')
    })
    

    it('should allow the user to use the back and forward buttons and retain the same info', () => {
        cy.visit('http://localhost:3000/#/qiJzLWCvPB/178322').wait(2000)

        .get('[data-cy=game-name]')
        .contains('Catan: Explorers & Pirates')

        .get('[data-cy=drink-name]')
        .contains('Spice 75')

        .visit('http://localhost:3000/')

        .go('back')

        .get('[data-cy=game-name]')
        .contains('Catan: Explorers & Pirates')

        .get('[data-cy=drink-name]')
        .contains('Spice 75')
    })
    
})
