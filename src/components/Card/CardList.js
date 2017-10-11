import React , { Component } from 'react';
import CardComponent from './CardComponent'; 

class CardList extends Component{

    constructor(props){

        super(props); 
    }

    componentDidMount(){

        this.props.loadInitialData(this.props.seed); 

    }


    renderList(){

       if(this.props.listState.length == 0){
           return "No Properties!"
       }

       return this.props.listState.map( property => {

            return <CardComponent key={property.id} 
                                  backgroundColor = {property.agency.brandingColors.primary} 
                                  logo = {property.agency.logo} 
                                  buttonClass = {this.props.buttonClass} 
                                  imageSrc={property.mainImage} 
                                  price={property.price} 
                                  buttonName = {this.props.buttonName} 
                                  buttonAction = { () => this.props.buttonAction(property , this.props.buttonActionType)} />

        });
    }

    render(){

        return(
            <div style={{ float : 'left'}} >
                <h3 style={{marginLeft : '30px'}} >{this.props.category}</h3>
                <ul>
                    {this.renderList()}
                </ul>
            </div>

        )
    }
}
    
export default CardList; 