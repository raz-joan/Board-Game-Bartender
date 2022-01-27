describe('Board Game Bartender Home Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://api.boardgameatlas.com/api/search?limit=25&pretty=true&client_id=YWBLPm0lyY', {
            "games": [
                {
                    "id": "TAAifFP590",
                    "handle": "root",
                    "url": "https://www.boardgameatlas.com/game/TAAifFP590/root",
                    "edit_url": "https://www.boardgameatlas.com/game/TAAifFP590/edit",
                    "name": "Root",
                    "price": "47.99",
                    "price_ca": "57.99",
                    "price_uk": "43.73",
                    "price_au": "67.99",
                    "msrp": 60,
                    "msrps": [
                        {
                            "country": "US",
                            "price": 60
                        },
                        {
                            "country": "CA",
                            "price": 81.6
                        }
                    ],
                    "discount": "0.20",
                    "year_published": 2018,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 90,
                    "min_age": 10,
                    "description": "<p>Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again.</p>",
                    "commentary": "<p>During a car ride, designer Cole and his wife were listening to an audio book of T. H. White's <strong>The Once and Future King</strong>. When the Monarch of Moat delivered the following line to Arthur, it spawned a series of ideas creating the framework for Root, a game of Might and Right: &quot;...There is only power. Power is of the individual mind, but the mind's power is not enough. Power of the body decides everything in the end, and only Might is Right.&quot;</p>",
                    "faq": "",
                    "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324760985.jpg",
                    "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324760985.jpg",
                    "description_preview": " Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again. "
                },
                {
                    "id": "yqR4PtpO8X",
                    "handle": "scythe",
                    "url": "https://www.boardgameatlas.com/game/yqR4PtpO8X/scythe",
                    "edit_url": "https://www.boardgameatlas.com/game/yqR4PtpO8X/edit",
                    "name": "Scythe",
                    "price": "54.92",
                    "price_ca": "72.95",
                    "price_uk": "63.99",
                    "price_au": "99.95",
                    "msrp": 90,
                    "msrps": [
                        {
                            "country": "US",
                            "price": 90
                        },
                        {
                            "country": "UK",
                            "price": 67
                        },
                        {
                            "country": "AU",
                            "price": 140
                        }
                    ],
                    "discount": "0.39",
                    "year_published": 2016,
                    "min_players": 1,
                    "max_players": 5,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 14,
                    "description": "<p><em>Scythe</em> gives players almost complete control over their fate. Other than each player's individual hidden objective card, the only elements of luck or variability are &quot;Encounter&quot; cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness.<br /><br /><em>Scythe</em> uses a streamlined action-selection mechanism (no rounds or phases) to keep gameplay moving at a brisk pace and reduce downtime between turns. While there is plenty of direct conflict for players who seek it, there is no player elimination.<br /><br />Every part of <em>Scythe</em> has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times.</p>",
                    "commentary": "",
                    "faq": "",
                    "thumb_url": "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922",
                    "image_url": "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922",
                    "description_preview": "  Scythe  gives players almost complete control over their fate. Other than each player's individual hidden objective card, the only elements of luck or variability are \"Encounter\" cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness.   Scythe  uses a streamlined action-selection mechanism (no rounds or phases) to keep gameplay moving at a brisk pace and reduce downtime between turns. While there is plenty of direct conflict for players who seek it, there is no player elimination.  Every part of  Scythe  has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times. "
                }]
        })

        cy.visit('http://localhost:3000/')
    })

    it('should have a Header component', () => {
        cy.get('[data-cy=header')
            .should('exist')
    })

    it('should have a title', () => {
        cy.get('h1')
            .contains('Board Game Bartender')
    })

    it('should have a PairingForm component', () => {
        cy.get('[data-cy=pairing-form]')
            .should('exist')
            .should('have.class', 'pairing-form')
    })

    it('should have correct elements in form', () => {
        cy.get('[data-cy=pairing-form] datalist')
            .should('have.length', 2)
        
        cy.get('[data-cy=pairing-form] input')
            .should('have.length', 2)

        cy.get('[data-cy=pairing-form] [data-cy=game-choice]')
            .should('exist')

        cy.get('[data-cy=pairing-form] [data-cy=liquor-choice]')
            .should('exist')

        cy.get('[data-cy=pairing-form] [data-cy=pair-button]')
            .should('exist')
    })

    it('should have correct labels for form elements', () => {
        cy.get('input')
            .should('have.length', 2)

        cy.get('input').eq(0)
            .should('have.attr', 'placeholder', 'Choose Your Game!')

        cy.get('input').eq(1)
            .should('have.attr', 'placeholder', 'Whatchya drinking?')
    })

    it('should have the correct options for the games datalist', () => {
        cy.get('#games option')
            .should('have.length', 2)

        cy.get('#games option').eq(0)
            .should('have.value', 'Root')

        cy.get('#games option').eq(1)
            .should('have.value', 'Scythe')
    })

    it('should have the correct options for the liquor datalist', () => {
        cy.get('#liquors option')
            .should('have.length', 7)

        cy.get('#liquors option').eq(0)
            .should('have.value', 'Vodka')

        cy.get('#liquors option').eq(1)
            .should('have.value', 'Gin')

        cy.get('#liquors option').eq(2)
            .should('have.value', 'Rum')

        cy.get('#liquors option').eq(3)
            .should('have.value', 'Whiskey')
        
        cy.get('#liquors option').eq(4)
            .should('have.value', 'Bourbon')

        cy.get('#liquors option').eq(5)
            .should('have.value', 'Tequila')

        cy.get('#liquors option').eq(6)
            .should('have.value', 'Scotch')
    })

    it('should reflect the correct value when typing in the game dropdown', () => {
        cy.get('[data-cy=game-choice]')
            .type('Catan')
            .should('have.value', 'Catan')
        
        cy.get('[data-cy=liquor-choice]')
            .type('Gin')
            .should('have.value', 'Gin')
        
        cy.get('[data-cy=game-choice]').clear()
            .get('[data-cy=liquor-choice').clear()

        cy.get('[data-cy=liquor-choice]')
            .type('Whiskey')
            .should('have.value', 'Whiskey')

        cy.get('[data-cy=game-choice]')
            .type('Root')
            .should('have.value', 'Root')
    })
})