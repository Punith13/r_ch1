import * as ActionTypes from './ActionTypes'; 

import { INITIAL_RESULTS_DATA } from '../backendResultData'; 

export const loadInitialData = () => {

    return {
        type : ActionTypes.GET_INITIAL_RESULTS_DATA , 
        payload : INITIAL_RESULTS_DATA
    }

}

