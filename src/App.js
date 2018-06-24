import React, { Component } from 'react';
import logo from './logo.svg';
import MathButton from './components/MathButton.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 1
    };
  }

  addButton = () => {
    this.setState({ currentNumber: this.state.currentNumber + 1 });
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.currentNumber}</p>
        <MathButton id='addButton' onClickFunc={this.addButton} label='+1' />
      </div>
    );
  }
}

export default App;
