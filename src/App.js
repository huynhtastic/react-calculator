import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 1
    };
  }

  render() {
    return (
      <div className="App">
        <p>Calculator</p>
        <p>{this.state.currentNumber}</p>
      </div>
    )
  }
}

export default App;
