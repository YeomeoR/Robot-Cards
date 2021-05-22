import React from 'react';
import './card.styles.css'

export const Card = (props) => {
    return(
    <div className="card-container">
            <h2>{props.monster.name}</h2>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`} />
            <p>{props.monster.email}</p>
        </div>
    )
}