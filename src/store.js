import { createStore , combineReducers } from 'redux'; 

import ResultReducer from './components/Results/Reducer'; 
import savedPropertyReducer from './components/SavedProperties/Reducer';

let rootReducer = combineReducers({

    resultState : ResultReducer ,
    savedPropertyState : savedPropertyReducer

});

let store = createStore(rootReducer); 

export default store; 

