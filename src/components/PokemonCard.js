import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const PokemonCard = ({ id, image, name, loading, type }) => {
    const style = type + " thumb-container";
    if (loading || !image) {
        return <div className='loading'></div>
    }
    return (
        <>
            <Link to={`/pokemon/${id}`} >
                <div className={style}>
                    <article>
                        <img src={image} alt={name} />
                        <div className="detail-wrapper">
                            <h3>{name}</h3>
                            <small>#0{id}</small>
                            <small>Type: {type}</small>
                        </div>
                    </article>
                </div>
            </Link>
        </>
    )
}

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default PokemonCard
