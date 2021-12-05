import React, { useState, useEffect } from 'react'
import logo from '../assets/pokeapi_logo.png'
import PokemonList from '../components/PokemonList'
import Search from '../components/Search'
import { API_ENDPOINT_1 as url } from '../context'

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [counter, setCounter] = useState(0)
    const [pagePokemons, setPagePokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const controller = new AbortController()
    const signal = controller.signal

    const getAllPokemons = async (url) => {
        try {
            setLoading(true)
            const res = await fetch(url, { signal })
            const info = await res.json()
            const count = info.count
            const randomArray = Array.from({
                length: count
            }, () => Math.floor(Math.random() * count));
            setPokemons(randomArray)
            const pageCount = randomArray.slice(counter, counter + 20)
            setCounter(counter => counter + 20)
            setPagePokemons(pageCount)
            setLoading(false)
            return () => controller.abort();
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllPokemons(url)
    }, [])

    if (loading) {
        return <div className='loading'></div>
    }

    return (
        <>
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
                <Search />
            </header>
            < PokemonList pagePokemons={pagePokemons} />
        </>
    )
}

export default Home
