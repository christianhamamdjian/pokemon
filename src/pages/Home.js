import React from 'react'
import logo from '../assets/pokeapi_logo.png'
import PokemonList from '../components/PokemonList'
import Search from '../components/Search'

const Home = () => {

    return (
        <>
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
                <h1>Random Pokémon grid</h1>
                <Search />
            </header>
            < PokemonList />
        </>
    )
}

export default Home
