import React from 'react';
import './CardList.css';
import Card from '../card/Card';

// class CardList extends Component {
//     render() {

//         const {monsters} = this.props
        
//         return(
//             <div className='card-list'>
//                 {
//                     monsters.map(monster => 
//                         <Card key={monster.id} monster={monster}/>)
//                 }
//             </div>
//         )
//     }
    
// }

const CardList = ({monsters}) => (
    <div className='card-list'>
        {monsters.map(monster => {
            return <Card key={monster.id} monster={monster}/>
        })}
    </div>
)

export default CardList;