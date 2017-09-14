import React from 'react'; 
import { render } from 'react-dom'; 
import Header from './header'; 
import Footer from './footer'; 

const App = () => {

return (

    <div>
        <Header /> 
        <Footer />  
    </div>
)
}

render( <App /> , document.getElementById('root'));