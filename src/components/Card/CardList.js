import React , { Component } from 'react';
import CardComponent from './CardComponent'; 

class CardList extends Component{

    constructor(props){

        super(props); 
    }

    componentDidMount(){

        this.props.loadInitialData(); 

    }
    renderList(){

       return this.props.listState.map( property => {

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