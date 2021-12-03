import React, { useState } from 'react'
// import { useGlobalContext } from '../context'
// import { useNavigate } from "react-router-dom"
import PokemonData from '../components/PokemonData'

const Search = () => {
    //const { query, setQuery, isError } = useGlobalContext()
    // const [query, setQuery] = useState('')
    // const history = useNavigate();
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     window.alert('Submitted');
    //     history.push(`/pokemon/${query}`);
    // }

    const [search, setSearch] = React.useState('');

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState('');

    const getPokemon = async (e, query) => {
        e.preventDefault()
        console.log('Searching', query)
        if (!query) {
            setErrorMsg('You must enter a Pokemon');
            setError(true);
            return;
        }
        setError(false);
        setLoading(true);
        setTimeout(async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
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
        }, 1500);
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
                <button className="btn" onClick={(e) => getPokemon(search)}>Search</button>

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