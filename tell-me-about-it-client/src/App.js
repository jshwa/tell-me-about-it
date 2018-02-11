import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Clock from './components/Clock';
import Github from './containers/Github';
import { loginUser } from './actions/Users';

class App extends Component {
	componentDidMount() {
		const params = this.getQueryParams();
		this.props.loginUser(params);
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

const mapStateToProps = state => {
	return ({
		token: state.token,
		login: state.login
	})
}

export default connect(mapStateToProps, {loginUser})(App);
