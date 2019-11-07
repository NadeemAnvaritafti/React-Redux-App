import React from 'react';

const NBACard = props => {
    return (
        <div>
            <h3>{props.team.full_name}</h3>
            <p>{props.team.abbreviation}</p>
            <p>Conference: {props.team.conference}</p>
            <p>Division: {props.team.division}</p>
        </div>
    )
}

export default NBACard;