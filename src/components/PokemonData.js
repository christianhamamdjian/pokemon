import React from 'react';

export default function PokemonData(props) {
    return (
        <div>
            <div>
                <h5>{props.name}</h5>
                <img src={props.sprite} alt={props.name} />
            </div>
            <div>
                <h5>Abilities</h5>
                {props.abilities.map((ability, key) => (
                    <div key={key}>
                        <span>{ability.ability.name}</span>
                    </div>
                ))}
                <h5>Types</h5>
                {props.types.map((type, key) => (
                    <div key={key}>
                        <span>{type.type.name}</span>
                    </div>
                ))}
            </div>
            <div>
                <h4>Base Stats</h4>
                {props.stats.map((stat, key) => (
                    <div key={key}>
                        <strong>{stat.stat.name}</strong>
                        <div className="progress">
                            <label htmlFor="file">File progress: {stat.base_stat} </label>
                            <progress className="progress-bar" id="file" value={stat.base_stat} max={255}> 70% </progress>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}