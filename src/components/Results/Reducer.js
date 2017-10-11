import { GET_INITIAL_RESULTS_DATA } from '../ActionTypes';

export default function resultReducer( state = [] , action ){

    switch(action.type){

            case GET_INITIAL_RESULTS_DATA : 
            return action.payload ; 
            break; 

            default: 
            return state; 
        
    }

}