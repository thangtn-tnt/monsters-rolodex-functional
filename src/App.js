import React, { useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  const onTitleChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setTitle(searchField);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>

      <SearchBox
        className="monsters-search"
        onChangeHandler={onSearchChange}
        placeholder="Search monsters"
      />
      <br />
      <SearchBox
        className="title-search"
        onChangeHandler={onTitleChange}
        placeholder="Set title"
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
}
