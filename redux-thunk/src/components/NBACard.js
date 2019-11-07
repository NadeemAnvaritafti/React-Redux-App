import React from 'react';

const NBACard = props => {
    return (
        <div className='nbacard'>
            <h3>{props.team.full_name} ({props.team.abbreviation})</h3>
            <p>Conference: {props.team.conference}</p>
            <p>Division: {props.team.division}</p>
        </div>
    )
}

export default NBACard;