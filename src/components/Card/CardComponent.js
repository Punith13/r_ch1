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

        return(

            <div onMouseEnter={ () => this.showButton(true)} onMouseLeave= { () => this.showButton(false)}> 


                <div style = {{ backgroundColor : props.backgroundColor }} className="logo" >

                    <img className="logo-image" src={this.props.logo} />

                </div>

                <img className="card-image" src={this.props.imageSrc} /> 

                <div className="price">
                   <label> {this.props.price} </label>

                   { this.showButtonFlag && <button className={this.props.buttonClass} onClick={ () =>  this.props.buttonAction}> </button> }

                </div>

            </div>

        )

    }


}


export default CardComponent; 