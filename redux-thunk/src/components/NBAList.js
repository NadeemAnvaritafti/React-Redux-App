import React from 'react';
import {connect} from 'react-redux';

import {fetchData} from '../actions';

import NBACard from './NBACard';

const NBAList = props => {
    return (
        <div>
            {props.nbaData.map(item => (
                <NBACard item={item}/>
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