import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Clock from './components/Clock';
import Users from './components/Users';
import { GithubLogin } from './components/GithubLogin';
import Drafter from './containers/Drafter';
import Hub from './containers/Hub';
import { LoggedInRoute } from './containers/LoggedInRoute';
import { Prompt } from './components/Prompt';
import { clearState } from './localStorage';
import { logoutUser } from './actions/Users';

class App extends Component {

   changeBackground = () => (
      fetch(process.env.REACT_APP_BACKGROUND_URL)
      .then(resp => resp.json())
      .then(img => {
         document.getElementById('site-background').style.backgroundImage = `url('${img.urls.full}')`
      })
      )

   signOut = () => {
      this.props.logoutUser();
      clearState();
   }

	render() {
      return (
         <div className="App">
            <Clock />
            <Prompt />
            <Switch>
               <Route path='/login' component={GithubLogin} />
               <Route path='/users' component={Users} />
               <LoggedInRoute path='/posts/:id' component={Drafter} auth={this.props.userData.loggedIn} />
               <LoggedInRoute path='/posts' component={Hub} auth={this.props.userData.loggedIn} />
               <LoggedInRoute path='/drafts/new' component={Drafter} auth={this.props.userData.loggedIn} />
               <LoggedInRoute path='/drafts/:id' component={Drafter} auth={this.props.userData.loggedIn} />
               <LoggedInRoute path='/drafts' component={Hub} auth={this.props.userData.loggedIn} />
               <Route exact path='/' render={() => (
                 this.props.userData.loggedIn === false ? <Redirect to= "/login" /> : <Redirect to= "/drafts" />
               )}/>
            </Switch>
            <div className="change-background-div">
               <button className="change-background" onClick={this.changeBackground}>></button>
            </div>
            <div className="sign-out-div">
               <button className="sign-out" onClick={this.signOut}>X</button>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      userData: state.userData
   }
}

export default withRouter(connect(mapStateToProps, { logoutUser })(App))