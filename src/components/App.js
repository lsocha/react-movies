import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Lukasz Reacteact Movie App!" />
        <p className="App-intro">
          Welcome to the react-movies app!
        </p>
      </div>
    );
  }
}

export default App;
