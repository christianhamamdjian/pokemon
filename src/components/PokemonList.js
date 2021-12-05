import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'
import { API_ENDPOINT as url } from '../context'

const PokemonList = ({ pagePokemons }) => {
    const [allPokemons, setAllPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const controller = new AbortController()
    const signal = controller.signal

    const createPokemonList = async (pagePokemons) => {
        pagePokemons.forEach(async (pokemon) => {
            try {
                const res = await fetch(`${url}${pokemon}`, { signal })
                const data = await res.json()
                setAllPokemons(list => [...list, data])
                setLoading(false)
                return () => controller.abort();
            } catch (error) {
                console.log(error)
            }
        })
    }

    useEffect(() => {
        createPokemonList(pagePokemons)
    }, [])

    // if (loading) {
    //     return <div className='loading'></div>
    // }

    return (
        <>
            <h1>Random Pokémon list</h1>
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
