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
  }


  handleChange(event) {

    event.preventDefault()
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]:value
    })
    console.log("exiting handlechange")
  }



  addQuote(event){  console.log("addFoodItem")
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
      quoteList: [this.state.quoteList, quoteArray]
    })
    console.log(this.state.quoteList);
  }

  render() {

    const { quoteText, author, quoteList} = this.state;

    return (
      <form>
      <div className="App">
      <div className="row App-main">

        <div className="form-group">
          <input type="text" className="form-control" name="quoteText" placeholder="Enter a quote" value={this.quoteText} onChange={ this.handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="author" placeholder="Author" value={this.author} onChange={ this.handleChange} />
        </div>
        <button className="button" onClick={this.addQuote}>Save</button>
        </div>
        <div className="row App-main">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Quote</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.quoteList.length > 0 ? (
                  this.state.quoteList.map((quoteArray) => (
                      <tr key={quoteArray.id}>
                        <td>{ quoteArray.id }</td>
                        <td>{ quoteArray.quoteText }</td>
                        <td>{ quoteArray.author }</td>

                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td></td>
                  </tr>
                )
              }
          </tbody>
        </table>
        </div>
        </div>


      </form>
    );
  }

}

export default AddToList
