import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"

const PokemonCard = ({ pokemon }) => {
    const { name, url } = pokemon
    // const [pokemonUrl, setPokemonUrl] = useState({})
    // const [isLoading, setLoading] = useState(true)
    const id = url.split('/')[url.split('/').length - 2];
    const thumb = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    // const fetchPokemon = async (url) => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setPokemonUrl(data)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // }, [])

    // const imgUrl = pokemon.sprites.other.dream_world.front_default

    // console.log(imgUrl)

    return (
        <>
            <Link to={`/pokemon/${id}`} className='pokemon'>
                <article>
                    <img src={thumb} alt={name} />
                    <div className='pokemon-info'>
                        <h4 className='title'>{name}</h4>
                    </div>
                </article>
            </Link>
        </>
    )
}

export default PokemonCard
