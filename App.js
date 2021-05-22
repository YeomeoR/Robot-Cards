import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';
import './App.css';
import { SearchBox } from './components/searchBox/searchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // We don't need this binding if we use an arrow to handleChange. 
    // It was lexically scoped to the Window object.
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // as an arrow function, it automatically binds this to the place where the arrow function 
  // was defined in the first place. The context of this is in the App function, in this case
  handleChange = (e) => {
      this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className="App">
        <h1> Robot Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
