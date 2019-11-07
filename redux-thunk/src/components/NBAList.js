import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchData} from '../actions';

import NBACard from './NBACard';

const NBAList = props => {

    useEffect(()=> {
        props.fetchData();
    }, []);

    if (props.isFetching) {
        return <h3>Loading NBA Team Data...</h3>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.nbaData.map(team => (
                <NBACard key={team.id} team={team}/>
            ))}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        nbaData: state.nbaData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchData })(NBAList);