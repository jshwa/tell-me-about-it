import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Github from './containers/Github'

class App extends Component {
	componentDidMount() {
		const params = this.getQueryParams();
		debugger
	}

	getQueryParams() {
		const query = window.location.search.substring(1);
		const pairs = query.split('&').map((str) => str.split('='));
		return pairs.reduce((memo, pair) => {
		  memo[pair[0]] = pair[1];
		  return memo;
		}, {});
	 }

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
