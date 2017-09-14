import { createStore , combineReducers } from 'redux'; 

import ResultReducer from './components/Results/Reducer'; 

let rootReducer = combineReducers({

    resultState : ResultReducer 

});

let store = createStore(rootReducer); 

export default store; 

