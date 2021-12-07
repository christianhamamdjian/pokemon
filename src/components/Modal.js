import React from 'react';
import PropTypes from 'prop-types';
import PokemonDataModal from '../components/PokemonDataModal'

const Modal = ({ isModalOpen, closeModal, pokemon, loading }) => {

    if (loading) {
        return <div className='loading'></div>
    }
    return (
        <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`} >
            <div className="modal-container">
                <button className='close-modal-btn' onClick={closeModal}>
                    &times;
                </button>
                {!loading && pokemon ? (
                    <PokemonDataModal
                        name={pokemon.name}
                        sprite={pokemon.sprites.other["official-artwork"].front_default}
                        abilities={pokemon.abilities}
                        stats={pokemon.stats}
                        type={pokemon.types[0].type.name} />
                ) : null}

            </div>
        </div>
    );
};

Modal.propTypes = {
    pokemon: PropTypes.object,
    closeModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Modal;