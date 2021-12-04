import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import PokemonData from '../components/PokemonData'

const SinglePokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setLoading] = useState(true)

  const fetchPokemon = useCallback(async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setPokemon(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }, [id])

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <section>
      <Link to='/' className='btn'>
        back to grid
      </Link>
      <PokemonData
        name={pokemon.name}
        sprite={pokemon.sprites.other["official-artwork"].front_default}
        abilities={pokemon.abilities}
        stats={pokemon.stats}
        types={pokemon.types} />
    </section >
  )
}

export default SinglePokemon