import React, { useState, useEffect } from 'react'
import logo from '../assets/pokeapi_logo.png'
import PokemonList from '../components/PokemonList'
import Search from '../components/Search'
import axios from "axios"

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [counter, setCounter] = useState([])
    const [pagePokemons, setPagePokemons] = useState([])
    const url = `https://pokeapi.co/api/v2/pokemon-species/?limit=0`
    const [loading, setLoading] = useState(false)

    const getaAllPokemons = async (url) => {
        try {
            setLoading(true)
            let cancel
            axios.get(url, {
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then(res => {
                const count = res.data.count
                const randomArray = Array.from({
                    length: count
                }, () => Math.floor(Math.random() * count));
                setPokemons(randomArray)
                if (pokemons) {
                    setCounter(counter => counter + 20)
                }
                const pageCount = randomArray.slice(counter, counter + 20)
                setPagePokemons(pageCount)
                setLoading(false)
            })
            return () => cancel()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getaAllPokemons(url)
    }, [])

    if (loading) {
        return 'Loading...'
    }

    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Search />
            </header>
            < PokemonList pagePokemons={pagePokemons} />
        </>
    )
}

export default Home
