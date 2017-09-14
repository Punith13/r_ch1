import React from 'react'; 
import { render } from 'react-dom'; 
import Header from './header'; 
import Footer from './footer'; 

import { Provider } from 'react-redux'; 
import store from './store'; 

import Results from './components/Results/ResultsContainer'; 

const App = () => {

    return (

        <div>
            <Header /> 
                <Results />
            <Footer />  
        </div>
    )
}

render( <Provider store={store} > 
          <App /> 
        </Provider> , document.getElementById('root'));