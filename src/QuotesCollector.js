import React from "react";
import "./QuoteForm.css";

class QuotesCollector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
    };
  }

  componentDidMount() {
    //lifecycle method in react
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let quoteId = Math.floor(Math.random() * data.length);
        this.setState({
          text: data[quoteId].text,
          author: data[quoteId].author,
        });
      });
  }

  render() {
    const { text, author } = this.state;

    return (
      <div className="row App-main">
        <div id="text">
          <p>{text}</p>
        </div>
        <div id="text">
          <p>{author}</p>
        </div>
        <button className="button" onClick={this.addQuote}>
          Add
        </button>
      </div>
    );
  }
}

export default QuotesCollector;
