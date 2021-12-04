import React, { useState } from 'react'
import PokemonData from '../components/PokemonData'
import Modal from '../components/Modal'
import axios from "axios"

const Search = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getPokemon = async (e) => {
        e.preventDefault()
        const openModal = () => {
            setIsModalOpen(true);
        };
        if (!search) {
            setErrorMsg('You must enter a Pokemon');
            setError(true);
            return;
        }
        setError(false);
        setLoading(true);

        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
            const results = await response.data
            openModal()
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
            <Modal />
            {loading ? (
                <div>Loading...</div>
            ) : null}
            {!loading && pokemon ? (

                <PokemonData
                    name={pokemon.name}
                    sprite={pokemon.sprites.other["official-artwork"].front_default}
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types} />
            ) : null}
        </>
    )
}

export default Search