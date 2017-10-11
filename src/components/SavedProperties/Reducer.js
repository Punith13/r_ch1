import { GET_INITIAL_SAVED_PROPERTIES_DATA , ADD_TO_SAVED , REMOVE_FROM_SAVED } from '../ActionTypes';  

export default function savedPropertyReducer(state = [] , action){

    switch(action.type){

        case GET_INITIAL_SAVED_PROPERTIES_DATA : 
        return  action.payload ; 
        break; 

        case ADD_TO_SAVED : 
        return [...state , action.payload]; 
        break; 

        case REMOVE_FROM_SAVED : 
        return state.filter( property => {
            return property !== action.payload
        }); 
        break;

        default: 
        return state; 


    }

}