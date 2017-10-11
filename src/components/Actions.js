import * as ActionTypes from './ActionTypes'; 

import { INITIAL_RESULTS_DATA } from '../backendResultData'; 

import { INITIAL_SAVED_PROPERTIES_DATA } from '../backendSavedPropertyData'; 

export const loadInitialData = (seed) => {

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

export const buttonAction = (property , type ) => {

  switch(type){

    case 'Add' : 
     return{
         type : ActionTypes.ADD_TO_SAVED, 
         payload : property
     }
     break; 
     case 'Remove': 
     return{
         type : ActionTypes.REMOVE_FROM_SAVED, 
         payload : property
     }
  }

}
