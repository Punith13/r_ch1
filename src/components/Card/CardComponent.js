import React , { Component } from 'react' ; 

class CardComponent extends Component{

    constructor(props){

        super(props); 

        this.state = {
            showButtonFlag : false
        }
    }


    showButton(flag){
        
        this.setState( { showButtonFlag : flag } ); 
    }


    render(){

        const { backgroundColor , logo , imageSrc , price , buttonClass , buttonAction , buttonName } = this.props; 

        return(

            <div className="cardComponent" onMouseEnter={ () => this.showButton(true)} onMouseLeave= { () => this.showButton(false)}> 

                <div style = {{ backgroundColor }} className="logo" >

                    <img className="logo-image" src={ logo } />

                </div>

                <img className="card-image" src={ imageSrc } /> 

                <div className="price">
                   <label> { price } </label>

                </div>

                { this.state.showButtonFlag && <div className="btn-div"> <button className={buttonClass} onClick={ buttonAction}> { buttonName} </button> </div>}

            </div>

        )

    }


}


export default CardComponent; 