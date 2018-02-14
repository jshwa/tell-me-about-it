import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Clock from './components/Clock';
import Users from './components/Users';
import { GithubLogin } from './components/GithubLogin';
import { Drafter } from './containers/Drafter';
import Hub from './containers/Hub';
import { LoggedInRoute } from './containers/LoggedInRoute';

class App extends Component {
	render() {
      return (
         <div className="App">
            <Clock />
            <Switch>
               <Route path='/login' component={GithubLogin} />
               <Route exact path='/' render={() => (
                 this.props.userData.loggedIn === false ? <Redirect to= "/login" /> : <Redirect to= "/drafts" />
               )}/>
               <Route path='/users' component={Users} />
               <LoggedInRoute path='/drafts' component={Hub} auth={this.props.userData.loggedIn} />
               <LoggedInRoute path='/posts' component={Hub} auth={this.props.userData.loggedIn} />
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

export default withRouter(connect(mapStateToProps)(App))