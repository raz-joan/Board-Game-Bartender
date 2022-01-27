describe('Board Game Bartender Favorites Page', () => {
    it('should take users to landing page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('h1').contains('Board Game Bartender')
        
        cy.get('[data-cy=pairing-form]')
            .should('exist')
            .should('have.class', 'pairing-form')
    })

    it('should allow users to enter their game and liquor preferences to make a pairing', () => {
        cy.visit('http://localhost:3000/')
        
        cy.get('[data-cy=game-choice]').type('Catan')
        cy.get('[data-cy=game-choice]')
            .should('have.value', 'Catan')

        cy.get('[data-cy=liquor-choice]').type('Vodka')
        cy.get('[data-cy=liquor-choice]')
            .should('have.value', 'Vodka')
    })

    it('allow users to add the drink to favorites', () => {
        cy.visit('http://localhost:3000/')
        
        cy.get('[data-cy=favorites-page-button]').click()
        cy.get('[data-cy=favorite-card]')
            .should('have.length', 0)

        cy.go('back').wait(1000)

        cy.get('[data-cy=game-choice]').type('Wingspan')
        cy.get('[data-cy=liquor-choice]').type('Tequila')
        cy.get('[data-cy=pair-button]').click().wait(2000)

        cy.get('[data-cy=favorites-button]').click()
        cy.go('back').wait(1000)

        cy.get('[data-cy=favorites-page-button]').click()
        cy.get('[data-cy=favorite-card]')
            .should('have.length', 1)
    })

    it('should have a Header component', () => {
        cy.visit('http://localhost:3000/#/favorites/')

        cy.get('[data-cy=header')
            .should('exist')
    })

    it('should have a title', () => {
        cy.visit('http://localhost:3000/#/favorites/')

        cy.get('h1')
            .contains('Board Game Bartender')
    })
    
    it('should display favorited drinks on favorites page', () => {
        cy.visit('http://localhost:3000/#/favorites/')

        cy.get('[data-cy=fav-drinks-grid]')
            .should('exist')
            .should('have.class', 'favorites-grid')
        cy.get('[data-cy=favorite-card]')
            .should('have.length', 0)
    })

    it('should display cards with a drink name and an image', () => {
        cy.visit('http://localhost:3000/#/RCDJAQKpLn/11013').wait(2000)

        cy.get('[data-cy=favorites-button]').click()
        cy.get('.return-button').click()

        cy.get('[data-cy=favorites-page-button]').click()
        cy.get('[data-cy=favorite-card]')
            .should('have.length', 1)
        
        cy.get('[data-cy=favorite-card] h3')
            .contains('Alaska Cocktail')
        cy.get('[data-cy=favorite-card] img')
            .should('exist')
    })

    it('should allow users to remove a favorited drink', () => {
        cy.visit('http://localhost:3000/#/RCDJAQKpLn/11013').wait(2000)

        cy.get('[data-cy=favorites-button]').click()
        cy.get('.return-button').click()

        cy.get('[data-cy=favorites-page-button]').click()
        cy.get('[data-cy=favorite-card]')
            .should('have.length', 1)

        cy.get('[data-cy=favorite-card] h3').contains('Alaska Cocktail')

        cy.get('[data-cy=favorite-card]').find('[data-cy=remove-button]').click()

        cy.get('[data-cy=favorite-card]')
            .should('have.length', 0)
    })

    it('should allow users to return to the main page', () => {
        cy.visit('http://localhost:3000/#/favorites/')

        cy.get('[data-cy=pairing-form]')
            .should('not.exist')

        cy.get('[data-cy=favorite-return-button]').click()

        cy.get('[data-cy=pairing-form]')
            .should('exist')
    })
})

