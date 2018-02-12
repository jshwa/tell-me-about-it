import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './components/Clock';
import Github from './containers/Github';
import { loginUser } from './actions/Users';
import { getPublishedPosts } from './actions/Github';

class App extends Component {

	componentDidMount() {
      if (window.location.search !== "") {
         const params = this.getQueryParams();
         this.props.loginUser(params);
         this.props.getPublishedPosts(params.login);
      }
	}

	getQueryParams() {
		const query = window.location.search.substring(1);
		const params = query.split('&').map((str) => str.split('='));
		return params.reduce((memo, pair) => {
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

export default connect(null, { loginUser, getPublishedPosts })(App);
