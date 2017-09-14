import React , { Component } from 'react';
import CardComponent from './CardComponent'; 

class CardComponent extends Component{

    constructor(props){

        super(props); 
    }

    renderList(){

        this.props.list.map( property => {

            return <CardComponent key={property.id} />

        });
    }

    render(){

        return(
            <div>
                <h3>{this.props.category}</h3>
                <ul>
                    {this.renderList()}
                </ul>
            </div>

        )
    }
}
    
export default CardList; 