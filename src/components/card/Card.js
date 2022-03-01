import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    render() {

        const {id, name, email} = this.props.monster;

        return(
            <div className='card-container'>
                <img alt='monster' src={`http://robohash.org/${id}?set=set2&size=180x180`}/>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )
    }
    
}

export default Card;