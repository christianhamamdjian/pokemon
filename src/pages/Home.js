import React from 'react'
import logo from '../assets/pokeapi_logo.png';
import PokemonList from '../components/PokemonList';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Search />
            </header>
            <PokemonList />
        </div>

    )
}

export default Home
