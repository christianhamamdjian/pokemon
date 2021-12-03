import React, { useState, useEffect } from 'react'
import logo from '../assets/pokeapi_logo.png'
import PokemonList from '../components/PokemonList'
import Search from '../components/Search'
import Pagination from '../components/Pagination'
import axios from "axios"

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')//1118
    const [nextPagePageUrl, setNextPagePageUrl] = useState('')
    const [prevPagePageUrl, setPrevPagePageUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const getaAllPokemons = (currentPageUrl) => {
        setLoading(true)
        let cancel
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPagePageUrl(res.data.next)
            setPrevPagePageUrl(res.data.previous)
            setPokemons(res.data.results.map((item) => item))
        })
        return () => cancel()
    }

    useEffect(() => {
        getaAllPokemons(currentPageUrl)
    }, [currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPagePageUrl)
    }
    function gotoPrevPage() {
        setCurrentPageUrl(prevPagePageUrl)
    }

    if (loading) {
        return 'Loading...'
    }

    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Search />
            </header>
            <Pagination
                gotoNextPage={nextPagePageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPagePageUrl ? gotoPrevPage : null} />
            <PokemonList pokemons={pokemons} />
        </>

    )
}

export default Home
