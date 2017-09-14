import React from 'react'; 
import { connect } from 'react-redux'; 
import { loadInitialData , buttonAction } from '../Actions';

import CardList from '../Card/CardList'; 

const mapStateToProps = (state) => {

    return {
        listState : state.resultState
    }
}


export default connect( mapStateToProps , {loadInitialData , buttonAction } )(CardList);  