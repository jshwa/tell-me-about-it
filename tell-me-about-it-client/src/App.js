import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import GithubLogin from './components/GithubLogin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <GithubLogin /> 
      </div>
    );
  }
}

export default App;
