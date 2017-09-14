import { GET_INITIAL_SAVED_PROPERTIES_DATA } from '../ActionTypes';  

export default function savedPropertyReducer(state = [] , action){

    switch(action.type){

        case GET_INITIAL_SAVED_PROPERTIES_DATA : 
        return  action.payload ; 
        break; 

        default: 
        return state; 


    }

}