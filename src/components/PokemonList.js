import React from 'react'
import PokemonCard from '../components/PokemonCard'

const PokemonList = ({ pokemons }) => {

    return (
        <>
            <h1>Pokemon list</h1>
            <section className="pokemons">
                {pokemons.map((pokemon, index) => {
                    return (
                        <div key={index}>
                            <PokemonCard pokemon={pokemon} />
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default PokemonList
