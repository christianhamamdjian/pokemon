import React, { useState, useEffect } from 'react'
import logo from '../assets/pokeapi_logo.png'
import PokemonList from '../components/PokemonList'
import Search from '../components/Search'
import Pagination from '../components/Pagination'
import axios from "axios"

const Home = () => {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextPagePageUrl, setNextPagePageUrl] = useState('')
    const [prevPagePageUrl, setPrevPagePageUrl] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPagePageUrl(res.data.next)
            setPrevPagePageUrl(res.data.previous)
            setPokemon(res.data.results.map((item) => item.name))
        })
        return () => cancel()
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
            <PokemonList pokemon={pokemon} />
            <Pagination
                gotoNextPage={nextPagePageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPagePageUrl ? gotoPrevPage : null} />
        </>

    )
}

export default Home
