import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: "123",
          name: "Soar",
        },
        {
          id: "124",
          name: "Solid",
        },
        {
          id: "125",
          name: "Vivian",
        },
        {
          id: "121",
          name: "Vivian",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }

}
export default App;
