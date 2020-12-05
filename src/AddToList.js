import React from 'react';

class AddToList extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      quoteText: '',
      author: '',
      quoteArray: {},
      quoteList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addQuote = this.addQuote.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchIdeas = this.searchIdeas.bind(this);
    }


  handleChange(event) {

    event.preventDefault()
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]:value
    })
  }



  addQuote(event){
    event.preventDefault()
    if (!this.state.quoteText) return ;
    const quoteArray = {
      id: this.state.quoteList.length + 1,
      quoteText: this.state.quoteText,
      author: this.state.author
    };

    console.log(quoteArray);
    this.setState({
      quoteText: '',
      author: '',
      quoteArray: quoteArray,
      quoteList: [...this.state.quoteList, quoteArray]
    })
    console.log(this.state.quoteList);
  }

  handleSearch(event){
    this.searchIdeas(event.target.value)
  }

  searchIdeas(query){
  let ideas = this.state.quoteList.filter((idea) => {
    return (idea.quoteText.toLowerCase().includes(query)) || (idea.author.toLowerCase().includes(query))
  });

  this.setState({quoteText: this.state.quoteText})
  this.setState({author: this.state.author})
  console.log(ideas);
  }


  render() {

    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" name="quoteText" placeholder="Enter a quote" value={this.quoteText} onChange={ this.handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="author" placeholder="Author" value={this.author} onChange={ this.handleChange} />
        </div>
        <button className="button" onClick={this.addQuote}>Save</button>

        <div>
        <div className="row">
        <div className="input-field">
          <input type="text"placeholder="Search" onKeyUp={this.handleSearch.bind(this)}/>
        </div>
      </div>

        <table>
          <thead>
            <tr>
              <th>Quote</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.quoteList.length > 0 ? (
                  this.state.quoteList.reverse().map((quoteArray) => (
                      <tr key={quoteArray.id}>
                        <td>{ quoteArray.quoteText }</td>
                        <td>{ quoteArray.author }</td>

                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td colSpan={3}></td>
                  </tr>
                )
              }
          </tbody>
        </table>
        </div>





      </form>
    );
  }

}

export default AddToList
