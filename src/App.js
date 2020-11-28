import './App.css';
import QuotesList from './QuotesList'



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <a>
        <QuotesList />
        <form>
          <label>Quote:<input type="text" name="name" /></label>
          <label>Author:<input type="text" name="name" /></label>
          <input type="submit" value="Submit" />
        </form>
        </a>
      </header>
    </div>
  );
}


export default App;
