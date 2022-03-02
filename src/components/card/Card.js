import React from 'react';

import './Card.css';

// class Card extends Component {
//     render() {

//         const {id, name, email} = this.props.monster;

//         return(
//             <div className='card-container'>
//                 <img alt='monster' src={`http://robohash.org/${id}?set=set2&size=180x180`}/>
//                 <h1>{name}</h1>
//                 <p>{email}</p>
//             </div>
//         )
//     }
    
// }

const Card = ({monster}) => (    
    <div className='card-container'>
        <img alt='monster' src={`http://robohash.org/${monster.id}?set=set2&size=180x180`}/>
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
</div>
)


export default Card;