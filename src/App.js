import React, { Component } from "react";
// import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Monsters Rolodex</h1>

      {/* <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
        className={"monsters-search-box"}
      />
      <CardList className="card-list" monsters={filteredMonsters} />
    </div> */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }, () => {}))
//       .catch((error) => console.log(error));
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLowerCase();
//     this.setState({ searchField: searchString });
//   };

//   render() {
//     // console.log("render from app.js")
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="title">Monsters Rolodex</h1>

//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={"search monsters"}
//           className={"monsters-search-box"}
//         />
//         <CardList className="card-list" monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
