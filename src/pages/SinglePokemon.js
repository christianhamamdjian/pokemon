import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import PokemonData from '../components/PokemonData'
import { API_ENDPOINT_2 as url } from '../context'
import { useGlobalContext } from '../context'

const SinglePokemon = () => {
  const { nextPage } = useGlobalContext()
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchPokemon = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPokemon(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPokemon(`${url}${id}`)
  }, [id])

  if (loading) {
    return <div className='loading'></div>
  }

  return (
    <section>
      <Link onClick={nextPage} to='/' className='btn'>
        back to grid
      </Link>
      <PokemonData
        name={pokemon.name}
        sprite={pokemon.sprites.other["official-artwork"].front_default}
        abilities={pokemon.abilities}
        stats={pokemon.stats}
        types={pokemon.types}
        loading={loading} />
    </section >
  )
}

export default SinglePokemon