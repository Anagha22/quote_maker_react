import React from 'react';

class QuotesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      author: ''
    }
  }

  componentDidMount() {     //lifecycle method in react
     this.getQuote()
  }

  getQuote() {

    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let quoteId = Math.floor(Math.random() * data.length)
        this.setState({
          text: data[quoteId].text,
          author: data[quoteId].author,
        })
      })
  }

  render(){
    const { text, author } = this.state

    return(
      <div>
      <h1>A quote to enlighten the day</h1>
      <div id='text'><p>{text}</p></div>
      <div id='text'><p>{author}</p></div>

      </div>
    )
  }
}

export default QuotesList
