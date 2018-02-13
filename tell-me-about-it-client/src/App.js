import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './components/Clock';
import Hub from './containers/Hub';
import { loginUser } from './actions/Users';
import { getPublishedPosts } from './actions/Posts';
import { getDraftPosts } from './actions/Drafts';
import Drafter from './containers/Drafter'

class App extends Component {

	componentDidMount() {
      if (window.location.search !== "") {
         const params = this.getQueryParams();
         this.props.loginUser(params);
         this.props.getPublishedPosts(params.login);
         this.props.getDraftPosts(params.token);
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
        <Drafter />
        <Hub /> 
      </div>
    );
  }
}

export default connect(null, { loginUser, getPublishedPosts, getDraftPosts })(App);
