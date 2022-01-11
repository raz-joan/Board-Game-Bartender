import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameName } from '../redux/actions/boardGame'
import { setLiquorType } from '../redux/actions/liquorSearch'
import '../Styles/PairingForm.css'
import { useNavigate } from 'react-router'
import apiCalls from '../apiCalls'

const PairingForm = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [ error, setError ] = useState('')

    const games = useSelector(state => state.boardGame.allGamesData.games)
    const type = useSelector(state => state.liquorSearch.liquorSearchWord)
    const gameName = useSelector(state => state.boardGame.currentGameName)

    const gameNames = games.map((game) => {
        return (
            <option key={game.id} value={game.name} />
        )
    })

    const findRandomDrink = (event) => {
        event.preventDefault()
        apiCalls.getDrinkByType(type)
            .then(data => {
                if (data.drinks) {
                    let randomNum = Math.floor(Math.random() * data.drinks.length)
                    const drinkObj = data.drinks[randomNum]
                    const gameObj = games.find(game => game.name === gameName)
                    navigate(`/${gameObj.id}/${drinkObj.idDrink}`)
                } else {
                    setError(data.message)
                }
            })
    }

    return (
        <div className='loading-page-bottom'>
            <div className='circular-image'>
            <img src={require('../assets/games-drinks-friends.jpeg')} />
            </div>
            
            <form className='game-liquor-input'>
                <label htmlFor='game-choice' className='game-input'>
                    
                    <input className='game-dropdown' id='game-choice' placeholder='Choose Your Game!' list='games' onChange={(event) => dispatch(setGameName(event.target.value))}/>
                        <datalist id='games'>
                            {gameNames}
                        </datalist>
                </label>
                <label htmlFor='liquor-choice' className='liquor-input'>
                    
                    <input className ='liquor-dropdown'list='liquors' id='liquor-choice' placeholder='Whatchya drinking?' onChange={(event) => dispatch(setLiquorType(event.target.value))}/>
                    <datalist id='liquors' >
                        <option value='Vodka' />
                        <option value='Gin' />
                        <option value='Rum' />
                        <option value='Whiskey' />
                        <option value='Bourbon' />
                        <option value='Tequila' />
                        <option value='Scotch' />
                        <option value='Non Alcoholic' />
                    </datalist>

                </label>
                { error && <p className='error-message-pair-form'>Oops, '{error}'</p>}
                <button className='pair-button' onClick={(event) => findRandomDrink(event)}><span>Pair</span></button>
                <button className='favorites-button' onClick={() => { navigate('/favorites') }}>Favorites</button>
            </form>

        </div>
    )
}

export default PairingForm