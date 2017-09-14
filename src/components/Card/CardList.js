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

       return this.props.listState.map( property => {

            return <CardComponent key={property.id} 
                                  backgroundColor = {property.agency.brandingColors.primary} 
                                  logo = {property.agency.logo} 
                                  buttonClass = {this.props.buttonClass} 
                                  imageSrc={property.mainImage} 
                                  price={property.price} 
                                  buttonName = {this.props.buttonName} />

        });
    }

    render(){

        return(
            <div style={{ float : 'left'}} >
                <h3>{this.props.category}</h3>
                <ul>
                    {this.renderList()}
                </ul>
            </div>

        )
    }
}
    
export default CardList; 