import { string } from 'prop-types';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export const Link = ({ title, url }) => <a href={url}>{title}</a>;

Link.propTypes = {
  title: string.isRequired,
  url: string.isRequired
};

class MathButton extends Component {
  render() {
    return <button onClick={this.props.mathFunction}>{this.props.mathLabel}</button>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 1
    };
  }

  addOne = () => {
    this.setState({currentNumber : this.state.currentNumber + 1})
  }

  subtractOne = () => {
    this.setState({currentNumber: this.state.currentNumber - 1})
  }

  render() {
    return (
      <div className="App">
        <p>Calculator</p>
        <p>{this.state.currentNumber}</p>
        <MathButton mathFunction={this.addOne} mathLabel='+1' />
        <MathButton mathFunction={this.subtractOne} mathLabel='-1'/>
      </div>
    )
  }
}

export default App;
