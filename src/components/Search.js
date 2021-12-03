import React, { useState } from 'react'
import PokemonData from '../components/PokemonData'

const Search = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const getPokemon = async (e) => {
        e.preventDefault()
        console.log('Searching', search)
        if (!search) {
            setErrorMsg('You must enter a Pokemon');
            setError(true);
            return;
        }
        setError(false);
        setLoading(true);

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
            const results = await response.json();
            console.log(results);
            setPokemon(results);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
            setErrorMsg('Pokemon not found.');
        }
    }
    return (
        <>
            {error ? (<div>{errorMsg}</div>) : null}
            <form className='search-form'>
                <input
                    type='text'
                    className='form-input'
                    placeholder="Search for Pokemon"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn" onClick={getPokemon}>Search</button>
            </form>
            {loading ? (
                <div>Loading...</div>
            ) : null}
            {!loading && pokemon ? (
                <PokemonData
                    name={pokemon.name}
                    sprite={pokemon.sprites.front_default}
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types} />
            ) : null}
        </>
    )
}

export default Search