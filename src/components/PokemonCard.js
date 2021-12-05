import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = (props) => {

    return (
        <>
            <div key={props.id}>
                <Link to={`/pokemon/${props.id}`} className='pokemon'>
                    <article>
                        <img src={props.image} alt={props.name} />
                        <div className='pokemon-info'>
                            <h4 className='title'>{props.name}</h4>
                        </div>
                    </article>
                </Link>
            </div>
        </>
    )
}

export default PokemonCard
