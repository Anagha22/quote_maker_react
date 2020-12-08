import React from "react";
import "./App.css";
import AddToList from "./AddToList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      quoteText: "",
      author: "",
      quoteArray: {},
      quoteList: [],
    };
  }

  render() {
    return (
      <div className="App">
        <AddToList />
      </div>
    );
  }
}

export default App;
