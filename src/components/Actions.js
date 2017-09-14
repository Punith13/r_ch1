import * as ActionTypes from './ActionTypes'; 

import { INITIAL_RESULTS_DATA } from '../backendResultData'; 

import { INITIAL_SAVED_PROPERTIES_DATA } from '../backendSavedPropertyData'; 

export const loadInitialData = (seed) => {

    console.log(seed);

    switch(seed){

        case ActionTypes.GET_INITIAL_RESULTS_DATA : 
            return {
                type : ActionTypes.GET_INITIAL_RESULTS_DATA , 
                payload : INITIAL_RESULTS_DATA
            }
        break; 

        case ActionTypes.GET_INITIAL_SAVED_PROPERTIES_DATA : 
            return {
                type : ActionTypes.GET_INITIAL_SAVED_PROPERTIES_DATA , 
                payload : INITIAL_SAVED_PROPERTIES_DATA
            }
        break; 

    }

}

