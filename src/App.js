import React from "react";
import "./App.css";
import QuotesCollector from "./QuotesCollector";
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
        <header className="App-header">
          <a>
            <QuotesCollector />
            <AddToList />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
