import React from 'react';
import PropTypes from 'prop-types';

const PokemonData = ({ name, sprite, stats }) => {
    return (
        <section className="single-pokemon">
            <div>
                <h1>{name}</h1>
                <img src={sprite} alt={name} />
            </div>
            <div className="pokemon-stats">
                <h4>Base Stats</h4>
                {stats.map((stat, index) => (
                    <div key={index}>
                        <strong>{stat.stat.name}</strong>
                        <div className="progress">
                            <label htmlFor="file">File progress: {stat.base_stat} </label>
                            <progress className="progress-bar" id="file" value={stat.base_stat} max={255}> {stat.base_stat} </progress>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

PokemonData.propTypes = {
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
};

export default PokemonData