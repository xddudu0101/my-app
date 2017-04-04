import React, { Component } from 'react';
import logo from './logo.svg';
import TimeDisplay  from './components/TimeDisplay'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <TimeDisplay />
      </div>
    );
  }
}

export default App;
