import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Container from './components/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      stocks: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      text: '',
      stocks: [...this.state.stocks, this.state.text],
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Container stocks={this.state.stoks} />
      </div>
    );
  }
}

export default App;