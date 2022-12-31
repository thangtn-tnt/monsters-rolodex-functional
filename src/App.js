import React, { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      })
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { searchField }
      },
    )
  }

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterUsers = monsters.filter((monster) => {
      return monster.name.includes(searchField);
    })

    return (
      <div className="App">
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search monsters' />
          
        <CardList monsters={filterUsers} />
      </div>
    );
  }

}
export default App;
