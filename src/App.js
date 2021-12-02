import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Component/Card-list/CardList";
import { SearchBox } from "./Component/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
