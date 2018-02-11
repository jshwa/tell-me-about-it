import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Github from './containers/Github'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Github /> 
      </div>
    );
  }
}

export default App;
