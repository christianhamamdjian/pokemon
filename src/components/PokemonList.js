import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'
import axios from 'axios'

const PokemonList = ({ pagePokemons }) => {

    const [allPokemons, setAllPokemons] = useState([])

    function createPokemonObject(pagePokemons) {
        pagePokemons.forEach(async pokemon => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                const data = await res.data
                setAllPokemons(list => [...list, data])
            } catch (error) {
                console.log(error)
            }
        })
    }

    useEffect(() => {
        createPokemonObject(pagePokemons)
    }, [])

    return (
        <>
            <h1>Pokemon list</h1>
            <section className="pokemons">
                {allPokemons.map((pokemon, index) => {
                    return (
                        <PokemonCard key={index}
                            id={pokemon.id}
                            image={pokemon.sprites.other["official-artwork"].front_default}
                            name={pokemon.name}
                            type={pokemon.types[0].type.name}
                        />
                    )
                })}
            </section>
        </>
    )
}

export default PokemonList
