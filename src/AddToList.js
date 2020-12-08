import React from "react";
import copy from "copy-to-clipboard";

class AddToList extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      quoteText: "",
      author: "",
      quoteArray: {},
      quoteList: [],
      copyList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addQuote = this.addQuote.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchIdeas = this.searchIdeas.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.dismissQuote = this.dismissQuote.bind(this);
    this.addQuoteFromAPI = this.addQuoteFromAPI.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  addQuote(event) {
    event.preventDefault();
    if (!this.state.quoteText) return;
    const quoteArray = {
      id: this.state.quoteList.length + 1,
      quoteText: this.state.quoteText,
      author: this.state.authorText,
    };
    this.setState({
      quoteText: "",
      authorText: "",
      quoteArray: quoteArray,
      quoteList: [...this.state.quoteList, quoteArray],
    });
  }

  addQuoteFromAPI(event) {
    event.preventDefault();
    const quoteArray = {
      id: this.state.quoteList.length + 1,
      quoteText: this.state.text,
      author: this.state.author,
    };
    this.setState({
      text: "",
      author: "",
      quoteArray: quoteArray,
      quoteList: [...this.state.quoteList, quoteArray],
    });
  }

  handleSearch(event) {
    this.searchIdeas(event.target.value);
  }

  searchIdeas(query) {
    let ideas = this.state.quoteList.filter((idea) => {
      return (
        idea.quoteText.toLowerCase().includes(query) ||
        idea.author.toLowerCase().includes(query)
      );
    });

    this.setState({ quoteText: this.state.quoteText });
    this.setState({ author: this.state.author });
    console.log(ideas);
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

  dismissQuote() {
    document.querySelectorAll("close");

    this.setState({
      text: "",
      author: "",
    });
  }

  reloadQuote() {
    window.location.reload();
  }

  copyToClipboard() {
    const quoteVar = this.state.text;
    const authorVar = this.state.author;

    const copyList = quoteVar + "(" + authorVar + ")";
    copy(copyList);
  }

  render() {
    return (
      <form>
        <div className="QuoteCollect">
          <div id="textBox">
            <a>{this.state.text}</a>
            <br />
            <a>{this.state.author}</a>
            <br />
            <button className="button" onClick={this.dismissQuote}>
              <span class="close">&times;</span>
            </button>
            <button className="button" onClick={this.addQuoteFromAPI}>
              <span class="add">&#43;</span>
            </button>
            <button className="button" onClick={this.reloadQuote}>
              <span class="reload">&#8634;</span>
            </button>
            <button className="button" onClick={this.copyToClipboard}>
              Copy
            </button>
          </div>
        </div>
        <div className="form-group">
          <input
            id="quoteBox"
            type="text"
            className="form-control"
            name="quoteText"
            placeholder="Enter a quote"
            value={this.text}
            onChange={this.handleChange}
            required
          />
          <input
            id="authorBox"
            type="text"
            className="form-control"
            name="authorText"
            placeholder="Author"
            value={this.author}
            onChange={this.handleChange}
          />
          <button className="button" onClick={this.addQuote}>
            Save
          </button>
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Search"
            onKeyUp={this.handleSearch.bind(this)}
          />
        </div>
        <div className="displayTable">
          <table>
            <thead>
              <tr>
                <th>Quote</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {this.state.quoteList.length > 0 ? (
                this.state.quoteList
                  .slice(0)
                  .reverse()
                  .map((quoteArray) => (
                    <tr key={quoteArray.id}>
                      <td>{quoteArray.quoteText}</td>
                      <td>{quoteArray.author}</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan={2}></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}

export default AddToList;
