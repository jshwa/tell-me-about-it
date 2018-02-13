import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Clock from './components/Clock';
import Users from './components/Users';
import Hub from './containers/Hub';
import { Drafter } from './containers/Drafter'

export default class App extends Component {
	render() {
      return (
         <div className="App">
            <Clock />
            <Switch>
               <Route exact path='/' component={Hub} />
               <Route path='/drafts' component={Drafter} />
               <Route user='/users' component={Users} />
            </Switch>
         </div>
      );
   }
}