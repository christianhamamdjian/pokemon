import React, { useState } from 'react'
import Modal from '../components/Modal'
import { API_ENDPOINT as url } from '../context'

const Search = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const controller = new AbortController()
    const signal = controller.signal

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
            const response = await fetch(`${url}${search}`, { signal });
            const results = await response.json()
            openModal()
            setPokemon(results);
            setLoading(false);
            setSearch('')
            return () => controller.abort();
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
            setErrorMsg('Pokémon not found.');
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };
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
            <Modal isModalOpen={isModalOpen} closeModal={closeModal} pokemon={pokemon} loading={loading} />
            {loading ? (
                <div>Loading...</div>
            ) : null}
        </>
    )
}

export default Search