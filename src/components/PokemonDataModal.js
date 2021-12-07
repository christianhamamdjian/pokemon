import React from 'react';
import PropTypes from 'prop-types';

const PokemonData = ({ name, sprite, stats, loading, type }) => {
    const style = type + " data-modal";
    if (loading) {
        return <div className='loading'></div>
    }
    return (
        <div className={style}>
            <h1>{name}</h1>
            <img src={sprite} alt={name} />
            <h3>Type: {type}</h3>
            <br />
            <div className="pokemon-stats-modal">
                <h4>Base Stats</h4>
                {stats.map((stat, index) => (
                    <div key={index}>
                        <div className="progress">
                            <label htmlFor="file"><strong>{stat.stat.name}:</strong> {stat.base_stat} </label>
                            <progress className="progress-bar" id="file" value={stat.base_stat} max={255}> {stat.base_stat} </progress>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

PokemonData.propTypes = {
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
};

export default PokemonData