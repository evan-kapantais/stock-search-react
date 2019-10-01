import React, { Component } from 'react';
import './App.css';
import DropList from './components/DropList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      symbols: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const symbol = this.validateSymbol(this.state.text);
    this.setState({
      text: '',
      symbols: [...this.state.symbols, this.state.text],
    });
    console.log(this.state);
  }

  validateSymbol = (symbol) => {
    console.log(symbol);
  }

  render() {
    return (
      <div className="App">
        <form
          className="stock-form"
          onSubmit={this.handleSubmit}
          >
          <label htmlFor="stock-search"></label>
          <input 
            value={this.state.text}
            onChange={this.handleChange}
            type="text" 
            htmlFor="stock-list" 
            list="stock-list" 
            placeholder="Search Symbol..."
            id="stock-search"
          />
          <DropList symbols={this.state.symbols}/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default App;