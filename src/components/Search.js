import React, { useState } from 'react'
import Modal from '../components/Modal'
import { API_ENDPOINT_2 as url } from '../context'

const Search = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState(null);
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
            const data = await response.json()
            openModal()
            setPokemon(data);
            setLoading(false);
            setSearch('')
            return () => controller.abort();
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
            setSearch('')
            setErrorMsg('Pokémon not found.');
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <form className='search-form'>
                <input
                    type='text'
                    className='form-input'
                    placeholder="Search for Pokemon"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
                />
                <button className="btn" onClick={getPokemon}>Search</button>
            </form>
            {error ? (<div className="error">{errorMsg}</div>) : null}
            {loading ? (
                <div className='loading'></div>
            ) : null}

            <Modal isModalOpen={isModalOpen} closeModal={closeModal} pokemon={pokemon} loading={loading} />
        </>
    )
}

export default Search