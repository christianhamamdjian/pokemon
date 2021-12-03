import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
// import { API_ENDPOINT } from '../context'

const SingleMovie = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setLoading] = useState(true)

  const fetchPokemon = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setPokemon(data)
    setLoading(false)
  }

  useEffect(() => {
    // fetchPokemon(`${API_ENDPOINT}&i=${id}`)
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }, [id])

  if (isLoading) {
    return <div className='loading'></div>
  }
  const { abilities, /*size,*/ } = pokemon
  const abilitiesList = abilities.map((item, index) => {
    return <li key={index}>{item.ability.name}</li>
  })

  const imgUrl = pokemon.sprites.other.dream_world.front_default

  return (
    <section className='single-pokemon'>
      <h1>Id: {id}</h1>
      <ul>
        <h4>Abilities:</h4>
        {abilitiesList}
      </ul>


      <img src={imgUrl} alt="" />

      <div className='single-movie-info'>
        {/* <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4> */}
        <Link to='/' className='btn'>
          back to grid
        </Link>
      </div>
    </section >
  )
}

export default SingleMovie