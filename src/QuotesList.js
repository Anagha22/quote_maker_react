import React, {Component} from 'react';

class QuotesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      author: ''
    }
  }

  componentDidMount() {
     this.getQuote()
  }

  getQuote() {

    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let quoteId = Math.floor(Math.random() * data.length)
        console.log(data[quoteId])
        this.setState({
          text: quoteId['text'],
          author: quoteId['author'],

        })
      })
  }

  render(){
    const { text, author } = this.getQuote
    console.log({text})

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
