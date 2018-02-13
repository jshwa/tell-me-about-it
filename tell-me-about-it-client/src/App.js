import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
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
      }
      if (this.props.userData.login !== null) {
         this.props.getPublishedPosts(this.props.userData.login);
         this.props.getDraftPosts(this.props.userData.token);
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
            <Switch>
               <Route exact path='/' component={Hub} />
               <Route path='/draft' component={Drafter} />
            </Switch>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      userData: state.userData
   }
}

export default connect(mapStateToProps, { loginUser, getPublishedPosts, getDraftPosts })(App);
