//import React, {Component} from 'react';

import { useEffect, useState } from 'react';
import CardList from './components/card-list/CardList';
import './App.css';
import SearchBox from './components/search-box/SearchBox';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState({monsters: users}))
//   }
  
//   //More performant by not rendering extra anonymous functions
//   //assigning it to a variable so the code gets executed only once.
//   //Makes it more readable also

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
    
//     this.setState(() => {
//       return {searchField};
//     })
//   }

//   render() {
//     //Destructuring ES6
//     //More readability
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters' className='monster -search-box'/>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

const App = () => {

  //Array destructuring
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFiltederedMonsters] = useState(monsters)

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    setFiltederedMonsters(newfilteredMonsters);
  },[monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return(
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters' className='monster -search-box'/>
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
