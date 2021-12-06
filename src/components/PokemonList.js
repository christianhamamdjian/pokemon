import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'
import { API_ENDPOINT_2 as url } from '../context'
import PropTypes from 'prop-types';
import { useGlobalContext } from '../context'

const PokemonList = () => {
    const { pagePokemons, loading, pokemons, page } = useGlobalContext()
    const [pagePokemonArray, setPagePokemonArray] = useState([])
    const controller = new AbortController()
    const signal = controller.signal
    // console.log(pokemons)
    // console.log(pokemons[page])
    // console.log(pagePokemons)
    const createPokemonArray = (pagePokemons) => {
        pagePokemons.map(async (pokemon) => {
            try {
                const res = await fetch(`${url}${pokemon}`, { signal })
                const data = await res.json()
                setPagePokemonArray(list => [...list, data])
                return () => controller.abort();
            } catch (error) {
                console.log(error)
            }
        })
    }
    useEffect(() => {
        if (pagePokemons) {
            createPokemonArray(pokemons[page] || pagePokemons)
        }
    }, [pagePokemons])

    if (loading) {
        return <div className='loading'></div>
    }

    return (
        <>
            <h1 className="title">Random Pokémon list</h1>
            <section className="pokemons">
                {pagePokemonArray.map((pokemon, index) => {
                    return (
                        <PokemonCard key={index}
                            id={pokemon.id}
                            loading={loading}
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

PokemonList.propTypes = {
    pagePokemons: PropTypes.array,
}

export default PokemonList
