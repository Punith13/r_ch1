import React from 'react'; 

const Header = () => {

    return (
        <header>
            <h1><i>REA UI CHALLENGE</i></h1>
            <div className="description"><i>Description:</i> Hovering over a property card in the Results column will display an 'add' button. Clicking the 'add' button will create the property in the Saved Properties column. Hovering over a property card in the Saved Properties column will display a 'remove' button. Clicking the 'remove' button will remove the property from the list of saved properties.</div>
        </header>
    )
}

export default Header; 