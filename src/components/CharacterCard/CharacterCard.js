import React from 'react';
import './CharacterCard.css'

const CharacterCard = props => (
    <span className="container">
        <img className="character" src={props.image} alt={props.id} onClick={() => props.handleClick(props.id)}></img>
    </span>
)

export default CharacterCard;