import React, { Component } from 'react';
import logo from './logo.svg';
import MathButton from './components/MathButton.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 1,
      inputtedNumber: 0
    };
  }

  addNum = () => {
    this.setState({ currentNumber: this.state.currentNumber + 1 });
  }

  subtractNum = () => {
    this.setState({ currentNumber: this.state.currentNumber - 1});
  }

  onInputChange(num) {
    this.setState({ inputtedNumber: num.target.value });
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.currentNumber}</p>
        <input id='inputNumber' type='number' value={this.state.inputtedNumber}
          onChange={(num) => this.onInputChange(num)} />
        <MathButton id='addButton' onClickFunc={this.addNum} label='+1' />
        <MathButton id='subtractButton' onClickFunc={this.subtractNum} label='-1' />
      </div>
    );
  }
}

export default App;
