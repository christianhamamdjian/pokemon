import React from 'react';
import PropTypes from 'prop-types';
import PokemonData from '../components/PokemonData'


const Modal = ({ isModalOpen, closeModal, pokemon, loading }) => {

    return (
        <div
            className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
                }`}
        >
            {loading ? (
                <div className='loading'></div>
            ) : null}
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

Modal.propTypes = {
    pokemon: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Modal;