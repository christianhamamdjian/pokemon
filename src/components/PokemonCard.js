import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const PokemonCard = ({ id, image, name, loading }) => {
    if (loading) {
        return <div className='loading'></div>
    }
    return (
        <>
            <div className='pokemon' key={id}>
                <Link to={`/pokemon/${id}`} >
                    <article>
                        <img src={image} alt={name} />
                        <div className='pokemon-info'>
                            <h4 className='title'>{name}</h4>
                        </div>
                    </article>
                </Link>
            </div>
        </>
    )
}

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default PokemonCard
