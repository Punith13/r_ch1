import React , { Component } from 'react' ; 

class CardComponent extends Component{

    constructor(props){

        super(props); 

        this.state = {
            showButtonFlag : false
        }
    }


    showButton(flag){

        console.log("reaced showbutton" , flag)

        this.setState( { showButtonFlag : flag } ); 
    }


    render(){

        return(

            <div className="cardComponent" onMouseEnter={ () => this.showButton(true)} onMouseLeave= { () => this.showButton(false)}> 

                <div style = {{ backgroundColor : this.props.backgroundColor }} className="logo" >

                    <img className="logo-image" src={this.props.logo} />

                </div>

                <img className="card-image" src={this.props.imageSrc} /> 

                <div className="price">
                   <label> {this.props.price} </label>

                </div>

                { this.state.showButtonFlag && <div className="btn-div"> <button className={this.props.buttonClass} onClick={ () =>  this.props.buttonAction}> {this.props.buttonName} </button> </div>}

            </div>

        )

    }


}


export default CardComponent; 