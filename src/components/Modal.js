import React from 'react';
import PokemonData from '../components/PokemonData'

const Modal = ({ isModalOpen, closeModal, pokemon, loading }) => {
    if (loading) {
        return <div className='loading'></div>
    }
    return (
        <div
            className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
                }`}
        >
            <div className='modal-container'>
                <button className='close-modal-btn' onClick={closeModal}>
                    X
                </button>
                {!loading && pokemon ? (
                    <PokemonData
                        name={pokemon.name}
                        sprite={pokemon.sprites.other["official-artwork"].front_default}
                        abilities={pokemon.abilities}
                        stats={pokemon.stats}
                        types={pokemon.types} />
                ) : null}

            </div>
        </div>
    );
};

export default Modal;