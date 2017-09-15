import React from 'react'; 
import { render } from 'react-dom'; 
import Header from './header'; 
import Footer from './footer'; 

import { Provider } from 'react-redux'; 
import store from './store'; 

import Results from './components/Results/ResultsContainer'; 
import SavedProperties from './components/SavedProperties/SavedPropertiesContainer';

import * as ActionTypes from './components/ActionTypes';

const App = () => {

    return (

        <div>
            <Header /> 
                <Results seed={ActionTypes.GET_INITIAL_RESULTS_DATA} 
                         category ={'Results'} 
                         buttonActionType = {'Add'}
                         buttonClass= {'btn add'} 
                         buttonName = {'Add Property'}/>
                <SavedProperties seed={ActionTypes.GET_INITIAL_SAVED_PROPERTIES_DATA} 
                         category = {'Saved Properties'} 
                         buttonActionType = {'Remove'}
                         buttonClass= {'btn remove'}
                         buttonName = {'Remove Property'} /> 
            <Footer />  
        </div>
    )
}

export default App; 

render( <Provider store={store} > 
          <App /> 
        </Provider> , document.getElementById('root'));