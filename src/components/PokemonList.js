import React from 'react'
import PokemonInfo from '../pages/PokemonInfo'

const PokemonList = ({ pokemon }) => {
    return (
        <>
            <h1>Pokemon list</h1>
            {pokemon.map((item, index) => {
                return (
                    <div key={index}>
                        {item}
                    </div>
                )
            })}
            <PokemonInfo />
        </>
    )
}

export default PokemonList
